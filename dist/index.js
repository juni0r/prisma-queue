var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/PrismaQueue.ts
import { Cron } from "croner";
import { EventEmitter } from "events";
import assert from "assert";

// prisma/client/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// prisma/client/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.2.0",
  "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
  "activeProvider": "postgresql",
  "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = "prisma-client"\n  output          = "./client"\n  previewFeatures = []\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel QueueJob {\n  id          BigInt    @id @default(autoincrement()) @db.BigInt\n  queue       String\n  key         String?\n  cron        String?\n  payload     Json?\n  result      Json?\n  error       Json?\n  progress    Int       @default(0)\n  priority    Int       @default(0)\n  attempts    Int       @default(0)\n  maxAttempts Int?\n  runAt       DateTime  @default(now())\n  notBefore   DateTime?\n  finishedAt  DateTime?\n  processedAt DateTime?\n  failedAt    DateTime?\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  @@unique([key, runAt])\n  @@index([queue, priority, runAt, finishedAt])\n  @@map("queue_jobs")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"QueueJob":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"queue","kind":"scalar","type":"String"},{"name":"key","kind":"scalar","type":"String"},{"name":"cron","kind":"scalar","type":"String"},{"name":"payload","kind":"scalar","type":"Json"},{"name":"result","kind":"scalar","type":"Json"},{"name":"error","kind":"scalar","type":"Json"},{"name":"progress","kind":"scalar","type":"Int"},{"name":"priority","kind":"scalar","type":"Int"},{"name":"attempts","kind":"scalar","type":"Int"},{"name":"maxAttempts","kind":"scalar","type":"Int"},{"name":"runAt","kind":"scalar","type":"DateTime"},{"name":"notBefore","kind":"scalar","type":"DateTime"},{"name":"finishedAt","kind":"scalar","type":"DateTime"},{"name":"processedAt","kind":"scalar","type":"DateTime"},{"name":"failedAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"queue_jobs"}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  }
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// prisma/client/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AnyNull: () => AnyNull2,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  JsonNullValueFilter: () => JsonNullValueFilter,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullableJsonNullValueInput: () => NullableJsonNullValueInput,
  NullsOrder: () => NullsOrder,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  QueueJobScalarFieldEnum: () => QueueJobScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.2.0",
  engine: "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  QueueJob: "QueueJob"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var QueueJobScalarFieldEnum = {
  id: "id",
  queue: "queue",
  key: "key",
  cron: "cron",
  payload: "payload",
  result: "result",
  error: "error",
  progress: "progress",
  priority: "priority",
  attempts: "attempts",
  maxAttempts: "maxAttempts",
  runAt: "runAt",
  notBefore: "notBefore",
  finishedAt: "finishedAt",
  processedAt: "processedAt",
  failedAt: "failedAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var NullableJsonNullValueInput = {
  DbNull: DbNull2,
  JsonNull: JsonNull2
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var JsonNullValueFilter = {
  DbNull: DbNull2,
  JsonNull: JsonNull2,
  AnyNull: AnyNull2
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// prisma/client/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/PrismaJob.ts
var PrismaJob = class {
  #model;
  #client;
  #record;
  id;
  createdAt = /* @__PURE__ */ new Date();
  /**
   * Constructs a new PrismaJob instance with the provided job record and database access objects.
   * @param record - The initial database job record.
   * @param model - The Prisma delegate used for database operations related to the job.
   * @param client - The Prisma client for executing arbitrary queries.
   */
  constructor(record, { model, client }) {
    this.#model = model;
    this.#client = client;
    this.#record = record;
    this.id = record.id;
  }
  /**
   * Internal method to assign a new record to the job.
   * @param record - Optional new record to assign.
   */
  #assign(record) {
    if (record) {
      this.#record = record;
    }
  }
  /**
   * Gets the current job record.
   */
  get record() {
    return this.#record;
  }
  /**
   * Gets the job's unique key if any.
   */
  get key() {
    return this.#record.key;
  }
  /**
   * Gets the job's queue name.
   */
  get queue() {
    return this.#record.queue;
  }
  /**
   * Gets the CRON expression associated with the job for recurring scheduling.
   */
  get cron() {
    return this.#record.cron;
  }
  /**
   * Gets the job's priority level.
   */
  get priority() {
    return this.#record.priority;
  }
  /**
   * Gets the payload associated with the job.
   */
  get payload() {
    return this.#record.payload;
  }
  /**
   * Gets the timestamp when the job was finished.
   */
  get finishedAt() {
    return this.#record.finishedAt;
  }
  /**
   * Gets the error record if the job failed.
   */
  get error() {
    return this.#record.error;
  }
  /**
   * Updates the job's progress percentage.
   * @param progress - The new progress percentage.
   */
  async progress(progress) {
    return await this.update({ progress: Math.max(0, Math.min(100, progress)) });
  }
  /**
   * Fetches the latest job record from the database and updates the internal state.
   */
  async fetch() {
    const record = await this.#model.findUnique({
      where: { id: this.id }
    });
    this.#assign(record);
    return record;
  }
  /**
   * Updates the job record in the database with new data.
   * @param data - The new data to be merged with the existing job record.
   */
  async update(data) {
    const record = await this.#model.update({
      where: { id: this.id },
      data
    });
    this.#assign(record);
    return record;
  }
  /**
   * Deletes the job from the database.
   */
  async delete() {
    const record = await this.#model.delete({
      where: { id: this.id }
    });
    return record;
  }
  /**
   * Checks if the job is currently locked by another transaction.
   * @returns {Promise<boolean>} True if the job is locked, false otherwise.
   */
  async isLocked() {
    try {
      await this.#client.$executeRawUnsafe(
        `SELECT "id" FROM "public"."queue_jobs" WHERE "id" = $1 FOR UPDATE NOWAIT`,
        this.id
      );
      return false;
    } catch (error) {
      if (error instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
        return error.meta?.driverAdapterError?.cause?.code === "55P03";
      }
      throw error;
    }
  }
};

// src/utils/debug.ts
import createDebug from "debug";
var debug = createDebug("prisma-queue");

// src/utils/error.ts
var serializeError = (err) => {
  if (err instanceof Error) {
    return {
      name: err.name,
      message: err.message,
      stack: err.stack
    };
  }
  return {
    name: "UnknownError",
    message: String(err),
    stack: void 0
  };
};

// src/utils/prisma.ts
var toSnakeCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
};
var getTableName = (prisma, modelName) => {
  try {
    const datamodel = prisma._runtimeDataModel;
    const model = datamodel.models["QueueJob"];
    if (model?.dbName) {
      return model.dbName;
    }
  } catch {
  }
  return toSnakeCase(modelName);
};

// src/utils/string.ts
var escape = (name) => '"' + name.replace(/"/g, '""') + '"';
var uncapitalize = (string) => string.charAt(0).toLowerCase() + string.slice(1);

// src/utils/stringify.ts
function prepareForJson(originalValue) {
  if (typeof originalValue === "undefined") {
    return {
      $type: "undefined"
    };
  } else if (typeof originalValue === "bigint") {
    return {
      $type: "bigint",
      $value: `0x${originalValue.toString(16)}`
    };
  } else if (originalValue instanceof Map) {
    return {
      $type: "Map",
      $value: Array.from(originalValue.entries())
    };
  } else if (originalValue instanceof Set) {
    return {
      $type: "Set",
      $value: Array.from(originalValue.values())
    };
  } else if (originalValue instanceof Date) {
    return {
      $type: "Date",
      $value: originalValue.getTime()
    };
  } else if (typeof originalValue === "object" && originalValue !== null) {
    if (Array.isArray(originalValue)) {
      return originalValue.map(prepareForJson);
    } else {
      const copy = {};
      for (const key in originalValue) {
        copy[key] = prepareForJson(originalValue[key]);
      }
      return copy;
    }
  }
  return originalValue;
}
function restoreFromJson(preparedValue) {
  if (typeof preparedValue === "object" && preparedValue !== null && "$type" in preparedValue) {
    if (preparedValue["$type"] === "undefined") {
      return void 0;
    } else if (preparedValue["$type"] === "bigint") {
      return BigInt(preparedValue["$value"]);
    } else if (preparedValue["$type"] === "Map") {
      return new Map(preparedValue["$value"]);
    } else if (preparedValue["$type"] === "Set") {
      return new Set(preparedValue["$value"]);
    } else if (preparedValue["$type"] === "Date") {
      return new Date(preparedValue["$value"]);
    }
  } else if (typeof preparedValue === "object" && preparedValue !== null) {
    if (Array.isArray(preparedValue)) {
      return preparedValue.map(restoreFromJson);
    } else {
      const copy = {};
      for (const [key, value] of Object.entries(preparedValue)) {
        copy[key] = restoreFromJson(value);
      }
      return copy;
    }
  }
  return preparedValue;
}

// src/utils/time.ts
var AbortError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "AbortError";
  }
};
var waitFor = async (ms, signal) => new Promise((resolve, reject) => {
  const timeout = setTimeout(() => {
    resolve();
  }, ms);
  if (signal) {
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new AbortError("Aborted"));
    });
  }
});
var calculateDelay = (attempts) => Math.min(1e3 * Math.pow(2, Math.max(1, attempts)) + Math.random() * 100, Math.pow(2, 31) - 1);

// src/PrismaQueue.ts
var DEFAULT_MAX_CONCURRENCY = 1;
var DEFAULT_POLL_INTERVAL = 10 * 1e3;
var DEFAULT_JOB_INTERVAL = 50;
var DEFAULT_DELETE_ON = "never";
var PrismaQueue = class extends EventEmitter {
  /**
   * Constructs a PrismaQueue object with specified options and a worker function.
   * @param options - Configuration options for the queue.
   * @param worker - The worker function that processes jobs.
   */
  constructor(options, worker) {
    super();
    this.options = options;
    this.worker = worker;
    this.prisma = new PrismaClient(this.options.client);
    const {
      name = "default",
      modelName = "QueueJob",
      tableName = getTableName(this.prisma, modelName),
      maxAttempts = null,
      maxConcurrency = DEFAULT_MAX_CONCURRENCY,
      pollInterval = DEFAULT_POLL_INTERVAL,
      jobInterval = DEFAULT_JOB_INTERVAL,
      deleteOn = DEFAULT_DELETE_ON,
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      alignTimeZone = false
    } = this.options;
    assert(name.length <= 255, "name must be less or equal to 255 chars");
    assert(pollInterval >= 100, "pollInterval must be more than 100 ms");
    assert(jobInterval >= 10, "jobInterval must be more than 10 ms");
    this.name = name;
    this.config = {
      modelName,
      tableName,
      maxAttempts,
      maxConcurrency,
      pollInterval,
      jobInterval,
      deleteOn,
      alignTimeZone
    };
    this.on("error", (error, job) => {
      debug(
        job ? `Job with id=${job.id} failed for queue named="${this.name}" with error` : `Queue named="${this.name}" encountered an unexpected error`,
        error
      );
    });
    if (alignTimeZone) {
      console.warn(
        "[prisma-queue] The alignTimeZone option is deprecated and will be removed in a future version. The queue now uses JavaScript Date objects instead of SQL NOW() to avoid timezone issues."
      );
    }
  }
  prisma;
  name;
  config;
  concurrency = 0;
  stopped = true;
  abortController = new AbortController();
  /**
   * Gets the Prisma delegate associated with the queue job model.
   */
  get model() {
    const queueJobKey = uncapitalize(this.config.modelName);
    return this.prisma[queueJobKey];
  }
  /**
   * Starts the job processing in the queue.
   */
  async start() {
    debug(`starting queue named="${this.name}"...`);
    if (!this.stopped) {
      debug(`queue named="${this.name}" is already running, skipping...`);
      return;
    }
    this.stopped = false;
    this.abortController = new AbortController();
    return this.poll();
  }
  /**
   * Stops the job processing in the queue.
   * Waits for all in-flight jobs to complete before returning.
   * @param options - Stop options
   * @param options.timeout - Maximum time in milliseconds to wait for in-flight jobs (default: 30000)
   */
  async stop(options = {}) {
    const { timeout = 3e4 } = options;
    debug(`stopping queue named="${this.name}"...`);
    this.stopped = true;
    this.abortController.abort();
    const checkInterval = 100;
    const startTime = Date.now();
    while (this.concurrency > 0) {
      if (Date.now() - startTime > timeout) {
        debug(
          `stop() timed out after ${timeout}ms waiting for ${this.concurrency} in-flight jobs to complete for queue named="${this.name}"`
        );
        break;
      }
      await waitFor(checkInterval);
    }
    debug(`queue named="${this.name}" stopped with ${this.concurrency} remaining jobs`);
  }
  /**
   * Adds a job to the queue.
   * @param payloadOrFunction - The job payload or a function that returns a job payload.
   * @param options - Options for the job, such as scheduling and attempts.
   */
  // eslint-disable-next-line @typescript-eslint/unbound-method
  add = this.enqueue;
  /**
   * Adds a job to the queue.
   * @param payloadOrFunction - The job payload or a function that returns a job payload.
   * @param options - Options for the job, such as scheduling and attempts.
   */
  async enqueue(payloadOrFunction, options = {}) {
    debug(`enqueue`, this.name, payloadOrFunction, options);
    const { name: queueName, config: config2 } = this;
    const { key = null, cron = null, maxAttempts = config2.maxAttempts, priority = 0, runAt } = options;
    const queueJobKey = uncapitalize(this.config.modelName);
    const now = /* @__PURE__ */ new Date();
    const record = await this.prisma.$transaction(async (client) => {
      const model = client[queueJobKey];
      const payload = payloadOrFunction instanceof Function ? await payloadOrFunction(client) : payloadOrFunction;
      const data = {
        queue: queueName,
        cron,
        payload,
        maxAttempts,
        priority,
        key,
        createdAt: now,
        runAt: runAt ?? now
      };
      if (key && runAt) {
        const { count } = await model.deleteMany({
          where: {
            queue: queueName,
            key,
            runAt: {
              gte: now,
              not: runAt
            }
          }
        });
        if (count > 0) {
          debug(`deleted ${count} conflicting upcoming queue jobs`);
        }
        return await model.upsert({
          where: { key_runAt: { key, runAt } },
          create: data,
          update: data
        });
      }
      return await model.create({ data });
    });
    const job = new PrismaJob(record, {
      model: this.model,
      client: this.prisma
    });
    this.emit("enqueue", job);
    return job;
  }
  /**
   * Schedules a job according to the cron expression or a specific run time.
   * @param options - Scheduling options including cron, key, and run time.
   * @param payloadOrFunction - The job payload or a function that returns a job payload.
   */
  async schedule(options, payloadOrFunction) {
    debug(`schedule`, this.name, options, payloadOrFunction);
    const { key, cron, runAt: firstRunAt, ...otherOptions } = options;
    const runAt = firstRunAt ?? new Cron(cron).nextRun();
    assert(runAt, `Failed to find a future occurence for given cron`);
    return this.enqueue(payloadOrFunction, { key, cron, runAt, ...otherOptions });
  }
  /**
   * Polls the queue and processes jobs according to the configured intervals and concurrency settings.
   */
  async poll() {
    const { maxConcurrency, pollInterval, jobInterval } = this.config;
    debug(
      `polling queue named="${this.name}" with pollInterval=${pollInterval} maxConcurrency=${maxConcurrency}...`
    );
    try {
      while (!this.stopped) {
        if (this.concurrency >= maxConcurrency) {
          await waitFor(pollInterval, this.abortController.signal);
          continue;
        }
        const queueSize = await this.size(true);
        if (queueSize === 0) {
          await waitFor(pollInterval, this.abortController.signal);
          continue;
        }
        const slotsAvailable = maxConcurrency - this.concurrency;
        const jobsToProcess = Math.min(queueSize, slotsAvailable);
        for (let i = 0; i < jobsToProcess && !this.stopped; i++) {
          debug(`processing job from queue named="${this.name}"...`);
          this.concurrency++;
          setImmediate(() => {
            this.dequeue().then((job) => {
              if (job) {
                debug(`dequeued job({id: ${job.id}, payload: ${JSON.stringify(job.payload)}})`);
              }
            }).catch((error) => {
              this.emit("error", error);
            }).finally(() => {
              this.concurrency--;
            });
          });
          await waitFor(jobInterval, this.abortController.signal);
        }
        await waitFor(jobInterval * 2, this.abortController.signal);
      }
    } catch (error) {
      if (error instanceof AbortError) {
        debug(`polling for queue named="${this.name}" was aborted`);
      } else {
        throw error;
      }
    }
  }
  /**
   * Dequeues and processes the next job in the queue. Handles locking and error management internally.
   * @returns {Promise<PrismaJob<T, U> | null>} The job that was processed or null if no job was available.
   */
  async dequeue() {
    if (this.stopped) {
      return null;
    }
    debug(`dequeuing from queue named="${this.name}"...`);
    const { name: queueName } = this;
    const { tableName: tableNameRaw, deleteOn } = this.config;
    const tableName = escape(tableNameRaw);
    const queueJobKey = uncapitalize(this.config.modelName);
    const now = /* @__PURE__ */ new Date();
    const job = await this.prisma.$transaction(
      async (client) => {
        const rows = await client.$queryRawUnsafe(
          `UPDATE ${tableName} SET "processedAt" = $2, "attempts" = "attempts" + 1
           WHERE id = (
             SELECT id
             FROM ${tableName}
             WHERE (${tableName}."queue" = $1)
               AND (${tableName}."finishedAt" IS NULL)
               AND (${tableName}."runAt" <= $2)
               AND (${tableName}."notBefore" IS NULL OR ${tableName}."notBefore" <= $2)
             ORDER BY ${tableName}."priority" ASC, ${tableName}."runAt" ASC
             FOR UPDATE SKIP LOCKED
             LIMIT 1
           )
           RETURNING *;`,
          queueName,
          now
        );
        if (!rows.length || !rows[0]) {
          debug(`no jobs found in queue named="${this.name}"`);
          return null;
        }
        const { id, payload, attempts, maxAttempts } = rows[0];
        const job2 = new PrismaJob(rows[0], {
          model: client[queueJobKey],
          client
        });
        let result;
        try {
          debug(`starting worker for job({id: ${id}, payload: ${JSON.stringify(payload)}})`);
          result = await this.worker(job2, this.prisma);
          debug(`finished worker for job({id: ${id}, payload: ${JSON.stringify(payload)}})`);
          const date = /* @__PURE__ */ new Date();
          await job2.update({ finishedAt: date, progress: 100, result, error: prismaNamespace_exports.DbNull });
          this.emit("success", result, job2);
          if (deleteOn === "success" || deleteOn === "always") {
            await job2.delete();
          }
        } catch (error) {
          const date = /* @__PURE__ */ new Date();
          debug(
            `failed finishing job({id: ${id}, payload: ${JSON.stringify(payload)}}) with error="${String(error)}"`
          );
          const isFinished = maxAttempts && attempts >= maxAttempts;
          const notBefore = new Date(date.getTime() + calculateDelay(attempts));
          if (!isFinished) {
            debug(`will retry at notBefore=${notBefore.toISOString()} (attempts=${attempts})`);
          }
          await job2.update({
            finishedAt: isFinished ? date : null,
            failedAt: date,
            error: serializeError(error),
            notBefore: isFinished ? null : notBefore
          });
          this.emit("error", error, job2);
          if (deleteOn === "failure" || deleteOn === "always") {
            await job2.delete();
          }
        }
        return job2;
      },
      // @NOTE https://github.com/prisma/prisma/issues/11565#issuecomment-1031380271
      { timeout: 864e5 }
    );
    if (job) {
      this.emit("dequeue", job);
      const { key, cron, payload, finishedAt } = job;
      if (finishedAt && cron && key) {
        debug(
          `scheduling next cron job({key: ${key}, cron: ${cron}}) with payload=${JSON.stringify(payload)}`
        );
        await this.schedule({ key, cron }, payload);
      }
    }
    return job;
  }
  /**
   * Counts the number of jobs in the queue, optionally only those available for processing.
   * @param {boolean} onlyAvailable - If true, counts only jobs that are ready to be processed.
   * @returns {Promise<number>} The number of jobs.
   */
  async size(onlyAvailable) {
    const { name: queueName } = this;
    const date = /* @__PURE__ */ new Date();
    const where = { queue: queueName, finishedAt: null };
    if (onlyAvailable) {
      where.runAt = { lte: date };
      where.AND = { OR: [{ notBefore: { lte: date } }, { notBefore: null }] };
    }
    return await this.model.count({
      where
    });
  }
};

// src/index.ts
var createQueue = (options, worker) => {
  return new PrismaQueue(options, worker);
};
export {
  PrismaJob,
  PrismaQueue,
  createQueue,
  prepareForJson,
  restoreFromJson
};
//# sourceMappingURL=index.js.map