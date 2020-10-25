import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://93b05ce347a645cb930e30851dd73e8a@o466809.ingest.sentry.io/5481451',
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

function myErrorFunction(){
    throw new Error('undefined')
}

myErrorFunction()