The `/dev` directory contains development-environment only code that doesn’t
need to be co-located with other code, such as story utilities, custom DocBlock
components, and test utilities.

By having these in their own directory, we can easily blocklist them from being
included in the production bundle.
