import * as Effect from 'effect/Effect';
import { ChtClientService } from '../../services/cht-client.js';
import { HttpClientResponse } from '@effect/platform/HttpClientResponse';
export declare const upgradeCht: (version: string) => Effect.Effect<HttpClientResponse, Error, ChtClientService>;
export declare const stageChtUpgrade: (version: string) => Effect.Effect<HttpClientResponse, Error, ChtClientService>;
export declare const completeChtUpgrade: (version: string) => Effect.Effect<void, Error, ChtClientService>;
//# sourceMappingURL=upgrade.d.ts.map