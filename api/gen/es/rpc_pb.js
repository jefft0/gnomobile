// @generated by protoc-gen-es v2.0.0
// @generated from file rpc.proto (package land.gno.gnonative.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_gnonativetypes } from "./gnonativetypes_pb";

/**
 * Describes the file rpc.proto.
 */
export const file_rpc = /*@__PURE__*/
  fileDesc("CglycGMucHJvdG8SFWxhbmQuZ25vLmdub25hdGl2ZS52MSI7CgpFcnJEZXRhaWxzEi0KBWNvZGVzGAEgAygOMh4ubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkVyckNvZGUqtAYKB0VyckNvZGUSDQoJVW5kZWZpbmVkEAASCAoEVE9ETxABEhUKEUVyck5vdEltcGxlbWVudGVkEAISDwoLRXJySW50ZXJuYWwQAxITCg9FcnJJbnZhbGlkSW5wdXQQZBIYChRFcnJCcmlkZ2VJbnRlcnJ1cHRlZBBlEhMKD0Vyck1pc3NpbmdJbnB1dBBmEhQKEEVyclNlcmlhbGl6YXRpb24QZxIWChJFcnJEZXNlcmlhbGl6YXRpb24QaBISCg5FcnJJbml0U2VydmljZRBpEhAKDEVyclNldFJlbW90ZRBqEhwKF0VyckNyeXB0b0tleVR5cGVVbmtub3duEJYBEhkKFEVyckNyeXB0b0tleU5vdEZvdW5kEJcBEhcKEkVyck5vQWN0aXZlQWNjb3VudBCYARIVChBFcnJSdW5HUlBDU2VydmVyEJkBEhgKE0VyckRlY3J5cHRpb25GYWlsZWQQmgESEAoLRXJyVHhEZWNvZGUQyAESFwoSRXJySW52YWxpZFNlcXVlbmNlEMkBEhQKD0VyclVuYXV0aG9yaXplZBDKARIZChRFcnJJbnN1ZmZpY2llbnRGdW5kcxDLARIWChFFcnJVbmtub3duUmVxdWVzdBDMARIWChFFcnJJbnZhbGlkQWRkcmVzcxDNARIWChFFcnJVbmtub3duQWRkcmVzcxDOARIVChBFcnJJbnZhbGlkUHViS2V5EM8BEhkKFEVyckluc3VmZmljaWVudENvaW5zENABEhQKD0VyckludmFsaWRDb2lucxDRARIYChNFcnJJbnZhbGlkR2FzV2FudGVkENIBEhAKC0Vyck91dE9mR2FzENMBEhQKD0Vyck1lbW9Ub29MYXJnZRDUARIXChJFcnJJbnN1ZmZpY2llbnRGZWUQ1QESGQoURXJyVG9vTWFueVNpZ25hdHVyZXMQ1gESFAoPRXJyTm9TaWduYXR1cmVzENcBEhMKDkVyckdhc092ZXJmbG93ENgBEhYKEUVyckludmFsaWRQa2dQYXRoENkBEhMKDkVyckludmFsaWRTdG10ENoBEhMKDkVyckludmFsaWRFeHByENsBMtQcChBHbm9OYXRpdmVTZXJ2aWNlEl4KCVNldFJlbW90ZRInLmxhbmQuZ25vLmdub25hdGl2ZS52MS5TZXRSZW1vdGVSZXF1ZXN0GigubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlNldFJlbW90ZVJlc3BvbnNlEl4KCUdldFJlbW90ZRInLmxhbmQuZ25vLmdub25hdGl2ZS52MS5HZXRSZW1vdGVSZXF1ZXN0GigubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkdldFJlbW90ZVJlc3BvbnNlEmEKClNldENoYWluSUQSKC5sYW5kLmduby5nbm9uYXRpdmUudjEuU2V0Q2hhaW5JRFJlcXVlc3QaKS5sYW5kLmduby5nbm9uYXRpdmUudjEuU2V0Q2hhaW5JRFJlc3BvbnNlEmEKCkdldENoYWluSUQSKC5sYW5kLmduby5nbm9uYXRpdmUudjEuR2V0Q2hhaW5JRFJlcXVlc3QaKS5sYW5kLmduby5nbm9uYXRpdmUudjEuR2V0Q2hhaW5JRFJlc3BvbnNlEoUBChZHZW5lcmF0ZVJlY292ZXJ5UGhyYXNlEjQubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkdlbmVyYXRlUmVjb3ZlcnlQaHJhc2VSZXF1ZXN0GjUubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkdlbmVyYXRlUmVjb3ZlcnlQaHJhc2VSZXNwb25zZRJkCgtMaXN0S2V5SW5mbxIpLmxhbmQuZ25vLmdub25hdGl2ZS52MS5MaXN0S2V5SW5mb1JlcXVlc3QaKi5sYW5kLmduby5nbm9uYXRpdmUudjEuTGlzdEtleUluZm9SZXNwb25zZRJnCgxIYXNLZXlCeU5hbWUSKi5sYW5kLmduby5nbm9uYXRpdmUudjEuSGFzS2V5QnlOYW1lUmVxdWVzdBorLmxhbmQuZ25vLmdub25hdGl2ZS52MS5IYXNLZXlCeU5hbWVSZXNwb25zZRJwCg9IYXNLZXlCeUFkZHJlc3MSLS5sYW5kLmduby5nbm9uYXRpdmUudjEuSGFzS2V5QnlBZGRyZXNzUmVxdWVzdBouLmxhbmQuZ25vLmdub25hdGl2ZS52MS5IYXNLZXlCeUFkZHJlc3NSZXNwb25zZRKCAQoVSGFzS2V5QnlOYW1lT3JBZGRyZXNzEjMubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkhhc0tleUJ5TmFtZU9yQWRkcmVzc1JlcXVlc3QaNC5sYW5kLmduby5nbm9uYXRpdmUudjEuSGFzS2V5QnlOYW1lT3JBZGRyZXNzUmVzcG9uc2UScwoQR2V0S2V5SW5mb0J5TmFtZRIuLmxhbmQuZ25vLmdub25hdGl2ZS52MS5HZXRLZXlJbmZvQnlOYW1lUmVxdWVzdBovLmxhbmQuZ25vLmdub25hdGl2ZS52MS5HZXRLZXlJbmZvQnlOYW1lUmVzcG9uc2USfAoTR2V0S2V5SW5mb0J5QWRkcmVzcxIxLmxhbmQuZ25vLmdub25hdGl2ZS52MS5HZXRLZXlJbmZvQnlBZGRyZXNzUmVxdWVzdBoyLmxhbmQuZ25vLmdub25hdGl2ZS52MS5HZXRLZXlJbmZvQnlBZGRyZXNzUmVzcG9uc2USjgEKGUdldEtleUluZm9CeU5hbWVPckFkZHJlc3MSNy5sYW5kLmduby5nbm9uYXRpdmUudjEuR2V0S2V5SW5mb0J5TmFtZU9yQWRkcmVzc1JlcXVlc3QaOC5sYW5kLmduby5nbm9uYXRpdmUudjEuR2V0S2V5SW5mb0J5TmFtZU9yQWRkcmVzc1Jlc3BvbnNlEmoKDUNyZWF0ZUFjY291bnQSKy5sYW5kLmduby5nbm9uYXRpdmUudjEuQ3JlYXRlQWNjb3VudFJlcXVlc3QaLC5sYW5kLmduby5nbm9uYXRpdmUudjEuQ3JlYXRlQWNjb3VudFJlc3BvbnNlEmoKDVNlbGVjdEFjY291bnQSKy5sYW5kLmduby5nbm9uYXRpdmUudjEuU2VsZWN0QWNjb3VudFJlcXVlc3QaLC5sYW5kLmduby5nbm9uYXRpdmUudjEuU2VsZWN0QWNjb3VudFJlc3BvbnNlEmQKC1NldFBhc3N3b3JkEikubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlNldFBhc3N3b3JkUmVxdWVzdBoqLmxhbmQuZ25vLmdub25hdGl2ZS52MS5TZXRQYXNzd29yZFJlc3BvbnNlEm0KDlVwZGF0ZVBhc3N3b3JkEiwubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlVwZGF0ZVBhc3N3b3JkUmVxdWVzdBotLmxhbmQuZ25vLmdub25hdGl2ZS52MS5VcGRhdGVQYXNzd29yZFJlc3BvbnNlEnMKEEdldEFjdGl2ZUFjY291bnQSLi5sYW5kLmduby5nbm9uYXRpdmUudjEuR2V0QWN0aXZlQWNjb3VudFJlcXVlc3QaLy5sYW5kLmduby5nbm9uYXRpdmUudjEuR2V0QWN0aXZlQWNjb3VudFJlc3BvbnNlEmcKDFF1ZXJ5QWNjb3VudBIqLmxhbmQuZ25vLmdub25hdGl2ZS52MS5RdWVyeUFjY291bnRSZXF1ZXN0GisubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlF1ZXJ5QWNjb3VudFJlc3BvbnNlEmoKDURlbGV0ZUFjY291bnQSKy5sYW5kLmduby5nbm9uYXRpdmUudjEuRGVsZXRlQWNjb3VudFJlcXVlc3QaLC5sYW5kLmduby5nbm9uYXRpdmUudjEuRGVsZXRlQWNjb3VudFJlc3BvbnNlElIKBVF1ZXJ5EiMubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlF1ZXJ5UmVxdWVzdBokLmxhbmQuZ25vLmdub25hdGl2ZS52MS5RdWVyeVJlc3BvbnNlElUKBlJlbmRlchIkLmxhbmQuZ25vLmdub25hdGl2ZS52MS5SZW5kZXJSZXF1ZXN0GiUubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlJlbmRlclJlc3BvbnNlElIKBVFFdmFsEiMubGFuZC5nbm8uZ25vbmF0aXZlLnYxLlFFdmFsUmVxdWVzdBokLmxhbmQuZ25vLmdub25hdGl2ZS52MS5RRXZhbFJlc3BvbnNlElEKBENhbGwSIi5sYW5kLmduby5nbm9uYXRpdmUudjEuQ2FsbFJlcXVlc3QaIy5sYW5kLmduby5nbm9uYXRpdmUudjEuQ2FsbFJlc3BvbnNlMAESUQoEU2VuZBIiLmxhbmQuZ25vLmdub25hdGl2ZS52MS5TZW5kUmVxdWVzdBojLmxhbmQuZ25vLmdub25hdGl2ZS52MS5TZW5kUmVzcG9uc2UwARJOCgNSdW4SIS5sYW5kLmduby5nbm9uYXRpdmUudjEuUnVuUmVxdWVzdBoiLmxhbmQuZ25vLmdub25hdGl2ZS52MS5SdW5SZXNwb25zZTABElcKCk1ha2VDYWxsVHgSIi5sYW5kLmduby5nbm9uYXRpdmUudjEuQ2FsbFJlcXVlc3QaJS5sYW5kLmduby5nbm9uYXRpdmUudjEuTWFrZVR4UmVzcG9uc2USVwoKTWFrZVNlbmRUeBIiLmxhbmQuZ25vLmdub25hdGl2ZS52MS5TZW5kUmVxdWVzdBolLmxhbmQuZ25vLmdub25hdGl2ZS52MS5NYWtlVHhSZXNwb25zZRJVCglNYWtlUnVuVHgSIS5sYW5kLmduby5nbm9uYXRpdmUudjEuUnVuUmVxdWVzdBolLmxhbmQuZ25vLmdub25hdGl2ZS52MS5NYWtlVHhSZXNwb25zZRJVCgZTaWduVHgSJC5sYW5kLmduby5nbm9uYXRpdmUudjEuU2lnblR4UmVxdWVzdBolLmxhbmQuZ25vLmdub25hdGl2ZS52MS5TaWduVHhSZXNwb25zZRJ4ChFCcm9hZGNhc3RUeENvbW1pdBIvLmxhbmQuZ25vLmdub25hdGl2ZS52MS5Ccm9hZGNhc3RUeENvbW1pdFJlcXVlc3QaMC5sYW5kLmduby5nbm9uYXRpdmUudjEuQnJvYWRjYXN0VHhDb21taXRSZXNwb25zZTABEnAKD0FkZHJlc3NUb0JlY2gzMhItLmxhbmQuZ25vLmdub25hdGl2ZS52MS5BZGRyZXNzVG9CZWNoMzJSZXF1ZXN0Gi4ubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkFkZHJlc3NUb0JlY2gzMlJlc3BvbnNlEnYKEUFkZHJlc3NGcm9tQmVjaDMyEi8ubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkFkZHJlc3NGcm9tQmVjaDMyUmVxdWVzdBowLmxhbmQuZ25vLmdub25hdGl2ZS52MS5BZGRyZXNzRnJvbUJlY2gzMlJlc3BvbnNlEnwKE0FkZHJlc3NGcm9tTW5lbW9uaWMSMS5sYW5kLmduby5nbm9uYXRpdmUudjEuQWRkcmVzc0Zyb21NbmVtb25pY1JlcXVlc3QaMi5sYW5kLmduby5nbm9uYXRpdmUudjEuQWRkcmVzc0Zyb21NbmVtb25pY1Jlc3BvbnNlElIKBUhlbGxvEiMubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkhlbGxvUmVxdWVzdBokLmxhbmQuZ25vLmdub25hdGl2ZS52MS5IZWxsb1Jlc3BvbnNlEmYKC0hlbGxvU3RyZWFtEikubGFuZC5nbm8uZ25vbmF0aXZlLnYxLkhlbGxvU3RyZWFtUmVxdWVzdBoqLmxhbmQuZ25vLmdub25hdGl2ZS52MS5IZWxsb1N0cmVhbVJlc3BvbnNlMAFCL1onZ2l0aHViLmNvbS9nbm9sYW5nL2dub25hdGl2ZS9hcGkvZ2VuL2dvogIDUlRHYgZwcm90bzM", [file_gnonativetypes]);

/**
 * Describes the message land.gno.gnonative.v1.ErrDetails.
 * Use `create(ErrDetailsSchema)` to create a new message.
 */
export const ErrDetailsSchema = /*@__PURE__*/
  messageDesc(file_rpc, 0);

/**
 * Describes the enum land.gno.gnonative.v1.ErrCode.
 */
export const ErrCodeSchema = /*@__PURE__*/
  enumDesc(file_rpc, 0);

/**
 * The ErrCode enum defines errors for gRPC API functions. These are converted
 * from the Go error types returned by gnoclient.
 *
 * ----------------
 * Special errors
 * ----------------
 *
 * @generated from enum land.gno.gnonative.v1.ErrCode
 */
export const ErrCode = /*@__PURE__*/
  tsEnum(ErrCodeSchema);

/**
 * GnoNativeService is the service to interact with the Gno blockchain
 *
 * @generated from service land.gno.gnonative.v1.GnoNativeService
 */
export const GnoNativeService = /*@__PURE__*/
  serviceDesc(file_rpc, 0);

