export * from './Components/Modal';
export * from './Components/Button';
export * from './Components/Form/Field';
export * from './Components/Editor/Render';

import { ReactiveControllerContext } from './Contexts/ReactiveControllerContext';
import { withController } from './Providers/withController';
import { withReactive } from './Providers/withReactive';

export const Reactive = withReactive(({ children }): any => children);
export const Controller = withController;
export const Context = ReactiveControllerContext;
