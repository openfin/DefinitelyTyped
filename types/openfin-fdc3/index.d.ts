// Type definitions for openfin-fdc3 0.2
// Project: https://github.com/HadoukenIO/fdc3-service#readme
// Definitions by: bryangaleOF <https://github.com/bryangaleOF>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 3.0

declare namespace fdc3 {
    type AppChannel = import('./internal/main').AppChannel;
    type AppDirIntent = import('./internal/main').AppDirIntent;
    type AppId = import('./internal/main').AppId;
    type AppImage = import('./internal/main').AppImage;
    type AppIntent = import('./internal/main').AppIntent;
    type AppName = import('./internal/main').AppName;
    type Application = import('./internal/main').Application;
    type ApplicationError = import('./internal/main').ApplicationError;
    type Channel = import('./internal/main').Channel;
    type ChannelBase = import('./internal/main').ChannelBase;
    type ChannelChangedEvent = import('./internal/main').ChannelChangedEvent;
    type ChannelContextListener = import('./internal/main').ChannelContextListener;
    type ChannelError = import('./internal/main').ChannelError;
    type ChannelId = import('./internal/main').ChannelId;
    type ChannelWindowAddedEvent = import('./internal/main').ChannelWindowAddedEvent;
    type ChannelWindowRemovedEvent = import('./internal/main').ChannelWindowRemovedEvent;
    type ConnectionError = import('./internal/main').ConnectionError;
    type ContactContext = import('./internal/main').ContactContext;
    type Context = import('./internal/main').Context;
    type ContextListener = import('./internal/main').ContextListener;
    type DefaultChannel = import('./internal/main').DefaultChannel;
    type DisplayMetadata = import('./internal/main').DisplayMetadata;
    type FDC3Error = import('./internal/main').FDC3Error;
    type Icon = import('./internal/main').Icon;
    type InstrumentContext = import('./internal/main').InstrumentContext;
    type IntentListener = import('./internal/main').IntentListener;
    type IntentMetadata = import('./internal/main').IntentMetadata;
    type IntentResolution = import('./internal/main').IntentResolution;
    type Intents = import('./internal/main').Intents;
    type Listener = import('./internal/main').Listener;
    type NameValuePair = import('./internal/main').NameValuePair;
    type OrganizationContext = import('./internal/main').OrganizationContext;
    type ResolveError = import('./internal/main').ResolveError;
    type SendContextError = import('./internal/main').SendContextError;
    type SystemChannel = import('./internal/main').SystemChannel;
}

declare const fdc3: typeof import('./internal/main');
