import type { ITXClientDenyList } from "@prisma/client/runtime/client";
import { Prisma, PrismaClient } from "../prisma";
import { QueueJobModel as PrismaQueueJob } from "../prisma/client/models";
import type { PrismaJob } from "./PrismaJob";

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

export type PrismaQueueClient = Pick<
  PrismaClient,
  "$executeRaw" | "$executeRawUnsafe" | "$queryRaw" | "$queryRawUnsafe"
> & {
  $transaction<R>(fn: (client: ITXClient) => Promise<R>, options?: { timeout?: number }): Promise<R>;
} & { queueJob: QueueJobModel };

export type ITXClient = Omit<PrismaQueueClient, ITXClientDenyList>;

export type JobPayload = Prisma.InputJsonValue;
export type JobResult = Prisma.InputJsonValue;
export type DatabaseJob<Payload, Result> = Simplify<
  Omit<PrismaQueueJob, "payload" | "result"> & { payload: Payload; result: Result }
>;

export type JobCreator<T extends JobPayload> = (client: ITXClient) => Promise<T>;
export type JobWorker<T extends JobPayload = JobPayload, U extends JobResult = JobResult> = (
  job: PrismaJob<T, U>,
  client: ITXClient,
) => Promise<U>;

type JobInput = Omit<PrismaQueueJob, "id" | "createdAt" | "updatedAt" | "payload" | "result" | "error">;

type InputJson = Prisma.InputJsonValue;
type UpdateJson = InputJson | typeof Prisma.DbNull;

export type JobId = Pick<PrismaQueueJob, "id">;
export type JobUpdate = Simplify<
  Partial<JobInput & { payload: UpdateJson; result: UpdateJson; error: UpdateJson }>
>;
export type JobCreate = Simplify<
  Partial<JobInput & { payload: InputJson; result: InputJson; error: InputJson }> & { queue: string }
>;
export type JobWhere = Pick<
  Prisma.QueueJobWhereInput,
  "AND" | "OR" | "NOT" | "queue" | "key" | "runAt" | "finishedAt" | "notBefore"
>;

export type QueueJobModel = {
  findUnique(args: { where: JobId }): Promise<PrismaQueueJob | null>;
  count(args: { where: JobWhere }): Promise<number>;
  create(args: { data: JobCreate }): Promise<PrismaQueueJob>;
  update(args: { where: JobId; data: JobUpdate }): Promise<PrismaQueueJob>;
  upsert(args: {
    where: { key_runAt: { key: string; runAt: Date } };
    create: JobCreate;
    update: JobUpdate;
  }): Promise<PrismaQueueJob>;
  delete(args: { where: JobId }): Promise<PrismaQueueJob>;
  deleteMany(args: { where: JobWhere }): Promise<Prisma.BatchPayload>;
};
