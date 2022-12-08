export interface AdapterParams {
    target: string;
    headerProps: {
        title: string;
    };
}
declare const headerAdapter: ({ target, headerProps }: AdapterParams) => void;
export default headerAdapter;
