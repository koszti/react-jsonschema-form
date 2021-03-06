import { withTheme, FormProps } from '@rjsf-koszti/core';

import Theme from '../Theme';
import { StatelessComponent } from 'react';

const MuiForm: React.ComponentClass<FormProps<any>> | StatelessComponent<FormProps<any>>  = withTheme(Theme);

export default MuiForm;
