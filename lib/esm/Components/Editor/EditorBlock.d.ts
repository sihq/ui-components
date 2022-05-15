import { TypeBlock } from './Types';
interface Props {
    block: TypeBlock;
    select: VoidFunction;
    moveUp: VoidFunction;
    moveDown: VoidFunction;
    remove: VoidFunction;
}
declare const EditorBlock: (props: Props) => JSX.Element;
export default EditorBlock;
