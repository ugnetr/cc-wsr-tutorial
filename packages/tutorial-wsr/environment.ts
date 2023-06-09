import { builder as testEnvBuilder } from '@wix/wix-test-env';

export const testEnv = testEnvBuilder()
  .withHttpClient()
  .withMainApp('index')
  .withMainAppConfigEmitter((builder) =>
    builder.val('scripts_domain', 'static.parastorage.com'),
  )
  .build();
