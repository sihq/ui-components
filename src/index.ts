export * from './Components/Modal';
export * from './Components/Button';
export * from './Components/Form/Field';

import { withController } from './Providers/withController';
import { withReactive } from './Providers/withReactive';

export const Reactive = withReactive(({ children }): any => children);

export const Controller = withController;
