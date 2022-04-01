import { TypeInput } from '../../../Types';
interface TransferProperties extends TypeInput {
    label?: string;
}
declare const Transfer: (props: TransferProperties) => JSX.Element | null;
export default Transfer;
