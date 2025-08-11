export interface FormLibraryDemoProps {
  of: string;
  fieldName: string;
  initialValue: string | boolean;
  isCheckbox?: boolean;
  radioWithValue?: string;
  children: (args: {
    props: Omit<React.HTMLAttributes<HTMLElement>, 'value' | 'defaultValue'> & {
      value?: string;
      defaultValue?: string;
      checked?: boolean | string;
      name?: string;
    };
    error?: React.ReactNode;
  }) => React.ReactNode;
}
