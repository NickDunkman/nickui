import * as React from 'react';
import { ArgTypes } from 'storybook/internal/csf';
import { merge } from 'ts-deepmerge';

import { FLAVORS, SIZERS } from '@/constants';

type ResultType<Component extends React.ComponentType> = ArgTypes<
  React.ComponentProps<Component>
>;

type DefaultValuesSpec<Component extends React.ComponentType> = Partial<
  React.ComponentProps<Component>
>;

type DesciptionsSpec<Component extends React.ComponentType> = Partial<
  Record<keyof React.ComponentProps<Component>, string>
>;

type TypesSpec<Component extends React.ComponentType> = Partial<
  Record<keyof React.ComponentProps<Component>, string | readonly string[]>
>;

/**
 * Reduces the boilerplate needed to produce argTypes objects used in
 * story Meta objects
 */
export function storyArgsTyper<Component extends React.ComponentType>({
  isDisableable,
  hasSizers,
  hasFlavors,
  defaultValues,
  descriptions,
  types,
}: {
  isDisableable?: boolean;
  hasSizers?: boolean;
  hasFlavors?: boolean;
  /** Overrides default values shown in the ArgsTable */
  defaultValues?: DefaultValuesSpec<Component>;
  /** Overrides the prop descriptions shown in the ArgsTable */
  descriptions?: DesciptionsSpec<Component>;
  /**
   * Overrides the types shown in the ArgsTable, such as to spread Union types,
   * which react-docgen doesn’t do for you
   */
  types?: TypesSpec<Component>;
}): ResultType<Component> {
  return merge(
    // Set some universal defaults
    withDefaultValues({
      ...(isDisableable && { disabled: false }),
      ...(hasFlavors && { flavor: 'neutral' }),
      ...(hasSizers && { sizer: 'base' }),
    }),
    // Then apply customizations
    withDefaultValues(defaultValues),
    // Set some universal descriptions
    withDescriptions({
      className:
        'Optionally add classes to the root element, such as to position the component, or add margins',
    }),
    // Then apply customizations
    withDescriptions(descriptions),
    // Set some universal types
    withTypes({
      className: 'string',
      ...(hasFlavors && { flavor: FLAVORS }),
      ...(hasSizers && { sizer: SIZERS }),
    }),
    // Then apply customizations
    withTypes(types),
  ) as ResultType<Component>;
}

/** Returns an argTypes object with overriden default values */
function withDefaultValues<Component extends React.ComponentType>(
  propsWithDefaultValues: DefaultValuesSpec<Component> | undefined,
): ResultType<Component> {
  return Object.entries(propsWithDefaultValues || {}).reduce(
    (result, [propName, propDefaultValue]) => ({
      ...result,
      [propName]: {
        table: {
          defaultValue: {
            summary: propDefaultValue,
          },
        },
      },
    }),
    {} as ResultType<Component>,
  );
}

/** Returns an argTypes object with overriden type summaries */
function withTypes<Component extends React.ComponentType>(
  propsWithUnionTypes: TypesSpec<Component> | undefined,
): ResultType<Component> {
  return Object.entries<string | readonly string[] | undefined>(
    propsWithUnionTypes || {},
  ).reduce(
    (result, [propName, propUnionTypes]) =>
      !propUnionTypes?.length
        ? result
        : {
            ...result,
            [propName]: {
              table: {
                type: {
                  summary: Array.isArray(propUnionTypes)
                    ? propUnionTypes.join('|')
                    : propUnionTypes,
                },
              },
            },
          },
    {} as ResultType<Component>,
  );
}

/** Returns an argTypes object with overriden type summaries */
function withDescriptions<Component extends React.ComponentType>(
  propsWithDescriptions: DesciptionsSpec<Component> | undefined,
): ResultType<Component> {
  return Object.entries<string | undefined>(propsWithDescriptions || {}).reduce(
    (result, [propName, propDescription]) =>
      !propDescription?.length
        ? result
        : {
            ...result,
            [propName]: {
              description: propDescription,
            },
          },
    {} as ResultType<Component>,
  );
}
