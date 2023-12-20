import { Construct } from 'constructs';
import { EcsCluster as EcsCluster } from 'ecs-cluster';
import { EcsService as EcsService } from 'ecs-service';
import { EksCluster as EksCluster } from 'eks-cluster';
import { EksService as EksService } from "eks-service";

export interface AwsContainerServiceStackProps {
  appName: string;
  services: any;
  type: string;
}

export class AwsContainerService extends Construct {
  constructor(scope: Construct, id: string, props: AwsContainerServiceStackProps) {
    super(scope, id);

    const appName = props.appName;
    const services = props.services;
    const type = props.type;

    if (type === "eks") {
      new EksCluster(this, 'ecs', {
        appName: appName
      });

      new EksService(this, 'services', {
        appName: appName,
        services: services
      });
    } else {
      new EcsCluster(this, 'ecs', {
        appName: appName
      });

      new EcsService(this, 'services', {
        appName: appName,
        services: services
      });
    }
  }
}