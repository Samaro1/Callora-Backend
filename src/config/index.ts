import { env } from './env.js';

export const config = {
  port: env.PORT,
  nodeEnv: env.NODE_ENV,
  databaseUrl: env.DATABASE_URL,
  dbPool: {
    max: env.DB_POOL_MAX,
    idleTimeoutMillis: env.DB_IDLE_TIMEOUT_MS,
    connectionTimeoutMillis: env.DB_CONN_TIMEOUT_MS,
  },
  auth: {
    jwtSecret: env.JWT_SECRET,
    adminApiKey: env.ADMIN_API_KEY,
    metricsApiKey: env.METRICS_API_KEY,
  },
  proxy: {
    upstreamUrl: env.UPSTREAM_URL,
    timeoutMs: env.PROXY_TIMEOUT_MS,
  },
  cors: {
    allowedOrigins: env.CORS_ALLOWED_ORIGINS.split(',').map((o) => o.trim()),
  },
  logging: {
    level: env.LOG_LEVEL,
  },
  profiling: {
    enabled: env.GATEWAY_PROFILING_ENABLED,
  },
  rateLimitWindowMs: 60_000,
  rateLimitMaxRequests: 100,
};