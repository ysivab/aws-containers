import { Construct } from 'constructs';
export interface AwsContainerServiceStackProps {
    appName: string;
    services: any;
    type: string;
}
export declare class AwsContainerService extends Construct {
    constructor(scope: Construct, id: string, props: AwsContainerServiceStackProps);
}
