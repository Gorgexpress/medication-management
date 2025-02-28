/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "ApiKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "MedicationManagerWeb": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "Medications": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "MyApiGateway": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}