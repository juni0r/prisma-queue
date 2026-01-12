import { EventEmitter } from 'events';
import * as runtime from '@prisma/client/runtime/client';
import { ITXClientDenyList } from '@prisma/client/runtime/client';
import { PrismaPg } from '@prisma/adapter-pg';

/**
 * Model QueueJob
 *
 */
type QueueJobModel = runtime.Types.Result.DefaultSelection<$QueueJobPayload>;
type AggregateQueueJob = {
    _count: QueueJobCountAggregateOutputType | null;
    _avg: QueueJobAvgAggregateOutputType | null;
    _sum: QueueJobSumAggregateOutputType | null;
    _min: QueueJobMinAggregateOutputType | null;
    _max: QueueJobMaxAggregateOutputType | null;
};
type QueueJobAvgAggregateOutputType = {
    id: number | null;
    progress: number | null;
    priority: number | null;
    attempts: number | null;
    maxAttempts: number | null;
};
type QueueJobSumAggregateOutputType = {
    id: bigint | null;
    progress: number | null;
    priority: number | null;
    attempts: number | null;
    maxAttempts: number | null;
};
type QueueJobMinAggregateOutputType = {
    id: bigint | null;
    queue: string | null;
    key: string | null;
    cron: string | null;
    progress: number | null;
    priority: number | null;
    attempts: number | null;
    maxAttempts: number | null;
    runAt: Date | null;
    notBefore: Date | null;
    finishedAt: Date | null;
    processedAt: Date | null;
    failedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
type QueueJobMaxAggregateOutputType = {
    id: bigint | null;
    queue: string | null;
    key: string | null;
    cron: string | null;
    progress: number | null;
    priority: number | null;
    attempts: number | null;
    maxAttempts: number | null;
    runAt: Date | null;
    notBefore: Date | null;
    finishedAt: Date | null;
    processedAt: Date | null;
    failedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
type QueueJobCountAggregateOutputType = {
    id: number;
    queue: number;
    key: number;
    cron: number;
    payload: number;
    result: number;
    error: number;
    progress: number;
    priority: number;
    attempts: number;
    maxAttempts: number;
    runAt: number;
    notBefore: number;
    finishedAt: number;
    processedAt: number;
    failedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
type QueueJobAvgAggregateInputType = {
    id?: true;
    progress?: true;
    priority?: true;
    attempts?: true;
    maxAttempts?: true;
};
type QueueJobSumAggregateInputType = {
    id?: true;
    progress?: true;
    priority?: true;
    attempts?: true;
    maxAttempts?: true;
};
type QueueJobMinAggregateInputType = {
    id?: true;
    queue?: true;
    key?: true;
    cron?: true;
    progress?: true;
    priority?: true;
    attempts?: true;
    maxAttempts?: true;
    runAt?: true;
    notBefore?: true;
    finishedAt?: true;
    processedAt?: true;
    failedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
type QueueJobMaxAggregateInputType = {
    id?: true;
    queue?: true;
    key?: true;
    cron?: true;
    progress?: true;
    priority?: true;
    attempts?: true;
    maxAttempts?: true;
    runAt?: true;
    notBefore?: true;
    finishedAt?: true;
    processedAt?: true;
    failedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
type QueueJobCountAggregateInputType = {
    id?: true;
    queue?: true;
    key?: true;
    cron?: true;
    payload?: true;
    result?: true;
    error?: true;
    progress?: true;
    priority?: true;
    attempts?: true;
    maxAttempts?: true;
    runAt?: true;
    notBefore?: true;
    finishedAt?: true;
    processedAt?: true;
    failedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
type QueueJobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which QueueJob to aggregate.
     */
    where?: QueueJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QueueJobs to fetch.
     */
    orderBy?: QueueJobOrderByWithRelationInput | QueueJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QueueJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QueueJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QueueJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned QueueJobs
    **/
    _count?: true | QueueJobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: QueueJobAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: QueueJobSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QueueJobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QueueJobMaxAggregateInputType;
};
type GetQueueJobAggregateType<T extends QueueJobAggregateArgs> = {
    [P in keyof T & keyof AggregateQueueJob]: P extends '_count' | 'count' ? T[P] extends true ? number : GetScalarType<T[P], AggregateQueueJob[P]> : GetScalarType<T[P], AggregateQueueJob[P]>;
};
type QueueJobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: QueueJobWhereInput;
    orderBy?: QueueJobOrderByWithAggregationInput | QueueJobOrderByWithAggregationInput[];
    by: QueueJobScalarFieldEnum[] | QueueJobScalarFieldEnum;
    having?: QueueJobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QueueJobCountAggregateInputType | true;
    _avg?: QueueJobAvgAggregateInputType;
    _sum?: QueueJobSumAggregateInputType;
    _min?: QueueJobMinAggregateInputType;
    _max?: QueueJobMaxAggregateInputType;
};
type QueueJobGroupByOutputType = {
    id: bigint;
    queue: string;
    key: string | null;
    cron: string | null;
    payload: runtime.JsonValue | null;
    result: runtime.JsonValue | null;
    error: runtime.JsonValue | null;
    progress: number;
    priority: number;
    attempts: number;
    maxAttempts: number | null;
    runAt: Date;
    notBefore: Date | null;
    finishedAt: Date | null;
    processedAt: Date | null;
    failedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: QueueJobCountAggregateOutputType | null;
    _avg: QueueJobAvgAggregateOutputType | null;
    _sum: QueueJobSumAggregateOutputType | null;
    _min: QueueJobMinAggregateOutputType | null;
    _max: QueueJobMaxAggregateOutputType | null;
};
type GetQueueJobGroupByPayload<T extends QueueJobGroupByArgs> = PrismaPromise<Array<PickEnumerable<QueueJobGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QueueJobGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : GetScalarType<T[P], QueueJobGroupByOutputType[P]> : GetScalarType<T[P], QueueJobGroupByOutputType[P]>;
}>>;
type QueueJobWhereInput = {
    AND?: QueueJobWhereInput | QueueJobWhereInput[];
    OR?: QueueJobWhereInput[];
    NOT?: QueueJobWhereInput | QueueJobWhereInput[];
    id?: BigIntFilter<"QueueJob"> | bigint | number;
    queue?: StringFilter<"QueueJob"> | string;
    key?: StringNullableFilter<"QueueJob"> | string | null;
    cron?: StringNullableFilter<"QueueJob"> | string | null;
    payload?: JsonNullableFilter<"QueueJob">;
    result?: JsonNullableFilter<"QueueJob">;
    error?: JsonNullableFilter<"QueueJob">;
    progress?: IntFilter<"QueueJob"> | number;
    priority?: IntFilter<"QueueJob"> | number;
    attempts?: IntFilter<"QueueJob"> | number;
    maxAttempts?: IntNullableFilter<"QueueJob"> | number | null;
    runAt?: DateTimeFilter<"QueueJob"> | Date | string;
    notBefore?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    finishedAt?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    processedAt?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    failedAt?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    createdAt?: DateTimeFilter<"QueueJob"> | Date | string;
    updatedAt?: DateTimeFilter<"QueueJob"> | Date | string;
};
type QueueJobOrderByWithRelationInput = {
    id?: SortOrder;
    queue?: SortOrder;
    key?: SortOrderInput | SortOrder;
    cron?: SortOrderInput | SortOrder;
    payload?: SortOrderInput | SortOrder;
    result?: SortOrderInput | SortOrder;
    error?: SortOrderInput | SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrderInput | SortOrder;
    runAt?: SortOrder;
    notBefore?: SortOrderInput | SortOrder;
    finishedAt?: SortOrderInput | SortOrder;
    processedAt?: SortOrderInput | SortOrder;
    failedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
};
type QueueJobWhereUniqueInput = AtLeast<{
    id?: bigint | number;
    key_runAt?: QueueJobKeyRunAtCompoundUniqueInput;
    AND?: QueueJobWhereInput | QueueJobWhereInput[];
    OR?: QueueJobWhereInput[];
    NOT?: QueueJobWhereInput | QueueJobWhereInput[];
    queue?: StringFilter<"QueueJob"> | string;
    key?: StringNullableFilter<"QueueJob"> | string | null;
    cron?: StringNullableFilter<"QueueJob"> | string | null;
    payload?: JsonNullableFilter<"QueueJob">;
    result?: JsonNullableFilter<"QueueJob">;
    error?: JsonNullableFilter<"QueueJob">;
    progress?: IntFilter<"QueueJob"> | number;
    priority?: IntFilter<"QueueJob"> | number;
    attempts?: IntFilter<"QueueJob"> | number;
    maxAttempts?: IntNullableFilter<"QueueJob"> | number | null;
    runAt?: DateTimeFilter<"QueueJob"> | Date | string;
    notBefore?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    finishedAt?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    processedAt?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    failedAt?: DateTimeNullableFilter<"QueueJob"> | Date | string | null;
    createdAt?: DateTimeFilter<"QueueJob"> | Date | string;
    updatedAt?: DateTimeFilter<"QueueJob"> | Date | string;
}, "id" | "key_runAt">;
type QueueJobOrderByWithAggregationInput = {
    id?: SortOrder;
    queue?: SortOrder;
    key?: SortOrderInput | SortOrder;
    cron?: SortOrderInput | SortOrder;
    payload?: SortOrderInput | SortOrder;
    result?: SortOrderInput | SortOrder;
    error?: SortOrderInput | SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrderInput | SortOrder;
    runAt?: SortOrder;
    notBefore?: SortOrderInput | SortOrder;
    finishedAt?: SortOrderInput | SortOrder;
    processedAt?: SortOrderInput | SortOrder;
    failedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: QueueJobCountOrderByAggregateInput;
    _avg?: QueueJobAvgOrderByAggregateInput;
    _max?: QueueJobMaxOrderByAggregateInput;
    _min?: QueueJobMinOrderByAggregateInput;
    _sum?: QueueJobSumOrderByAggregateInput;
};
type QueueJobScalarWhereWithAggregatesInput = {
    AND?: QueueJobScalarWhereWithAggregatesInput | QueueJobScalarWhereWithAggregatesInput[];
    OR?: QueueJobScalarWhereWithAggregatesInput[];
    NOT?: QueueJobScalarWhereWithAggregatesInput | QueueJobScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<"QueueJob"> | bigint | number;
    queue?: StringWithAggregatesFilter<"QueueJob"> | string;
    key?: StringNullableWithAggregatesFilter<"QueueJob"> | string | null;
    cron?: StringNullableWithAggregatesFilter<"QueueJob"> | string | null;
    payload?: JsonNullableWithAggregatesFilter<"QueueJob">;
    result?: JsonNullableWithAggregatesFilter<"QueueJob">;
    error?: JsonNullableWithAggregatesFilter<"QueueJob">;
    progress?: IntWithAggregatesFilter<"QueueJob"> | number;
    priority?: IntWithAggregatesFilter<"QueueJob"> | number;
    attempts?: IntWithAggregatesFilter<"QueueJob"> | number;
    maxAttempts?: IntNullableWithAggregatesFilter<"QueueJob"> | number | null;
    runAt?: DateTimeWithAggregatesFilter<"QueueJob"> | Date | string;
    notBefore?: DateTimeNullableWithAggregatesFilter<"QueueJob"> | Date | string | null;
    finishedAt?: DateTimeNullableWithAggregatesFilter<"QueueJob"> | Date | string | null;
    processedAt?: DateTimeNullableWithAggregatesFilter<"QueueJob"> | Date | string | null;
    failedAt?: DateTimeNullableWithAggregatesFilter<"QueueJob"> | Date | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"QueueJob"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"QueueJob"> | Date | string;
};
type QueueJobCreateInput = {
    id?: bigint | number;
    queue: string;
    key?: string | null;
    cron?: string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: number;
    priority?: number;
    attempts?: number;
    maxAttempts?: number | null;
    runAt?: Date | string;
    notBefore?: Date | string | null;
    finishedAt?: Date | string | null;
    processedAt?: Date | string | null;
    failedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
type QueueJobUncheckedCreateInput = {
    id?: bigint | number;
    queue: string;
    key?: string | null;
    cron?: string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: number;
    priority?: number;
    attempts?: number;
    maxAttempts?: number | null;
    runAt?: Date | string;
    notBefore?: Date | string | null;
    finishedAt?: Date | string | null;
    processedAt?: Date | string | null;
    failedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
type QueueJobUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    queue?: StringFieldUpdateOperationsInput | string;
    key?: NullableStringFieldUpdateOperationsInput | string | null;
    cron?: NullableStringFieldUpdateOperationsInput | string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: IntFieldUpdateOperationsInput | number;
    priority?: IntFieldUpdateOperationsInput | number;
    attempts?: IntFieldUpdateOperationsInput | number;
    maxAttempts?: NullableIntFieldUpdateOperationsInput | number | null;
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notBefore?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
};
type QueueJobUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    queue?: StringFieldUpdateOperationsInput | string;
    key?: NullableStringFieldUpdateOperationsInput | string | null;
    cron?: NullableStringFieldUpdateOperationsInput | string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: IntFieldUpdateOperationsInput | number;
    priority?: IntFieldUpdateOperationsInput | number;
    attempts?: IntFieldUpdateOperationsInput | number;
    maxAttempts?: NullableIntFieldUpdateOperationsInput | number | null;
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notBefore?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
};
type QueueJobCreateManyInput = {
    id?: bigint | number;
    queue: string;
    key?: string | null;
    cron?: string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: number;
    priority?: number;
    attempts?: number;
    maxAttempts?: number | null;
    runAt?: Date | string;
    notBefore?: Date | string | null;
    finishedAt?: Date | string | null;
    processedAt?: Date | string | null;
    failedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
type QueueJobUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    queue?: StringFieldUpdateOperationsInput | string;
    key?: NullableStringFieldUpdateOperationsInput | string | null;
    cron?: NullableStringFieldUpdateOperationsInput | string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: IntFieldUpdateOperationsInput | number;
    priority?: IntFieldUpdateOperationsInput | number;
    attempts?: IntFieldUpdateOperationsInput | number;
    maxAttempts?: NullableIntFieldUpdateOperationsInput | number | null;
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notBefore?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
};
type QueueJobUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    queue?: StringFieldUpdateOperationsInput | string;
    key?: NullableStringFieldUpdateOperationsInput | string | null;
    cron?: NullableStringFieldUpdateOperationsInput | string | null;
    payload?: NullableJsonNullValueInput | runtime.InputJsonValue;
    result?: NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: NullableJsonNullValueInput | runtime.InputJsonValue;
    progress?: IntFieldUpdateOperationsInput | number;
    priority?: IntFieldUpdateOperationsInput | number;
    attempts?: IntFieldUpdateOperationsInput | number;
    maxAttempts?: NullableIntFieldUpdateOperationsInput | number | null;
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notBefore?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
};
type QueueJobKeyRunAtCompoundUniqueInput = {
    key: string;
    runAt: Date | string;
};
type QueueJobCountOrderByAggregateInput = {
    id?: SortOrder;
    queue?: SortOrder;
    key?: SortOrder;
    cron?: SortOrder;
    payload?: SortOrder;
    result?: SortOrder;
    error?: SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrder;
    runAt?: SortOrder;
    notBefore?: SortOrder;
    finishedAt?: SortOrder;
    processedAt?: SortOrder;
    failedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
};
type QueueJobAvgOrderByAggregateInput = {
    id?: SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrder;
};
type QueueJobMaxOrderByAggregateInput = {
    id?: SortOrder;
    queue?: SortOrder;
    key?: SortOrder;
    cron?: SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrder;
    runAt?: SortOrder;
    notBefore?: SortOrder;
    finishedAt?: SortOrder;
    processedAt?: SortOrder;
    failedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
};
type QueueJobMinOrderByAggregateInput = {
    id?: SortOrder;
    queue?: SortOrder;
    key?: SortOrder;
    cron?: SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrder;
    runAt?: SortOrder;
    notBefore?: SortOrder;
    finishedAt?: SortOrder;
    processedAt?: SortOrder;
    failedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
};
type QueueJobSumOrderByAggregateInput = {
    id?: SortOrder;
    progress?: SortOrder;
    priority?: SortOrder;
    attempts?: SortOrder;
    maxAttempts?: SortOrder;
};
type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
type StringFieldUpdateOperationsInput = {
    set?: string;
};
type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
type QueueJobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queue?: boolean;
    key?: boolean;
    cron?: boolean;
    payload?: boolean;
    result?: boolean;
    error?: boolean;
    progress?: boolean;
    priority?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    runAt?: boolean;
    notBefore?: boolean;
    finishedAt?: boolean;
    processedAt?: boolean;
    failedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["queueJob"]>;
type QueueJobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queue?: boolean;
    key?: boolean;
    cron?: boolean;
    payload?: boolean;
    result?: boolean;
    error?: boolean;
    progress?: boolean;
    priority?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    runAt?: boolean;
    notBefore?: boolean;
    finishedAt?: boolean;
    processedAt?: boolean;
    failedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["queueJob"]>;
type QueueJobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queue?: boolean;
    key?: boolean;
    cron?: boolean;
    payload?: boolean;
    result?: boolean;
    error?: boolean;
    progress?: boolean;
    priority?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    runAt?: boolean;
    notBefore?: boolean;
    finishedAt?: boolean;
    processedAt?: boolean;
    failedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["queueJob"]>;
type QueueJobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "queue" | "key" | "cron" | "payload" | "result" | "error" | "progress" | "priority" | "attempts" | "maxAttempts" | "runAt" | "notBefore" | "finishedAt" | "processedAt" | "failedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["queueJob"]>;
type $QueueJobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QueueJob";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        queue: string;
        key: string | null;
        cron: string | null;
        payload: runtime.JsonValue | null;
        result: runtime.JsonValue | null;
        error: runtime.JsonValue | null;
        progress: number;
        priority: number;
        attempts: number;
        maxAttempts: number | null;
        runAt: Date;
        notBefore: Date | null;
        finishedAt: Date | null;
        processedAt: Date | null;
        failedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["queueJob"]>;
    composites: {};
};
type QueueJobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QueueJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QueueJobCountAggregateInputType | true;
};
interface QueueJobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['model']['QueueJob'];
        meta: {
            name: 'QueueJob';
        };
    };
    /**
     * Find zero or one QueueJob that matches the filter.
     * @param {QueueJobFindUniqueArgs} args - Arguments to find a QueueJob
     * @example
     * // Get one QueueJob
     * const queueJob = await prisma.queueJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueJobFindUniqueArgs>(args: SelectSubset<T, QueueJobFindUniqueArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one QueueJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueueJobFindUniqueOrThrowArgs} args - Arguments to find a QueueJob
     * @example
     * // Get one QueueJob
     * const queueJob = await prisma.queueJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueJobFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first QueueJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobFindFirstArgs} args - Arguments to find a QueueJob
     * @example
     * // Get one QueueJob
     * const queueJob = await prisma.queueJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueJobFindFirstArgs>(args?: SelectSubset<T, QueueJobFindFirstArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first QueueJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobFindFirstOrThrowArgs} args - Arguments to find a QueueJob
     * @example
     * // Get one QueueJob
     * const queueJob = await prisma.queueJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueJobFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more QueueJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueueJobs
     * const queueJobs = await prisma.queueJob.findMany()
     *
     * // Get first 10 QueueJobs
     * const queueJobs = await prisma.queueJob.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const queueJobWithIdOnly = await prisma.queueJob.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QueueJobFindManyArgs>(args?: SelectSubset<T, QueueJobFindManyArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a QueueJob.
     * @param {QueueJobCreateArgs} args - Arguments to create a QueueJob.
     * @example
     * // Create one QueueJob
     * const QueueJob = await prisma.queueJob.create({
     *   data: {
     *     // ... data to create a QueueJob
     *   }
     * })
     *
     */
    create<T extends QueueJobCreateArgs>(args: SelectSubset<T, QueueJobCreateArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many QueueJobs.
     * @param {QueueJobCreateManyArgs} args - Arguments to create many QueueJobs.
     * @example
     * // Create many QueueJobs
     * const queueJob = await prisma.queueJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QueueJobCreateManyArgs>(args?: SelectSubset<T, QueueJobCreateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Create many QueueJobs and returns the data saved in the database.
     * @param {QueueJobCreateManyAndReturnArgs} args - Arguments to create many QueueJobs.
     * @example
     * // Create many QueueJobs
     * const queueJob = await prisma.queueJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many QueueJobs and only return the `id`
     * const queueJobWithIdOnly = await prisma.queueJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends QueueJobCreateManyAndReturnArgs>(args?: SelectSubset<T, QueueJobCreateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a QueueJob.
     * @param {QueueJobDeleteArgs} args - Arguments to delete one QueueJob.
     * @example
     * // Delete one QueueJob
     * const QueueJob = await prisma.queueJob.delete({
     *   where: {
     *     // ... filter to delete one QueueJob
     *   }
     * })
     *
     */
    delete<T extends QueueJobDeleteArgs>(args: SelectSubset<T, QueueJobDeleteArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one QueueJob.
     * @param {QueueJobUpdateArgs} args - Arguments to update one QueueJob.
     * @example
     * // Update one QueueJob
     * const queueJob = await prisma.queueJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QueueJobUpdateArgs>(args: SelectSubset<T, QueueJobUpdateArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more QueueJobs.
     * @param {QueueJobDeleteManyArgs} args - Arguments to filter QueueJobs to delete.
     * @example
     * // Delete a few QueueJobs
     * const { count } = await prisma.queueJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QueueJobDeleteManyArgs>(args?: SelectSubset<T, QueueJobDeleteManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more QueueJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueueJobs
     * const queueJob = await prisma.queueJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QueueJobUpdateManyArgs>(args: SelectSubset<T, QueueJobUpdateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more QueueJobs and returns the data updated in the database.
     * @param {QueueJobUpdateManyAndReturnArgs} args - Arguments to update many QueueJobs.
     * @example
     * // Update many QueueJobs
     * const queueJob = await prisma.queueJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more QueueJobs and only return the `id`
     * const queueJobWithIdOnly = await prisma.queueJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends QueueJobUpdateManyAndReturnArgs>(args: SelectSubset<T, QueueJobUpdateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one QueueJob.
     * @param {QueueJobUpsertArgs} args - Arguments to update or create a QueueJob.
     * @example
     * // Update or create a QueueJob
     * const queueJob = await prisma.queueJob.upsert({
     *   create: {
     *     // ... data to create a QueueJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueueJob we want to update
     *   }
     * })
     */
    upsert<T extends QueueJobUpsertArgs>(args: SelectSubset<T, QueueJobUpsertArgs<ExtArgs>>): Prisma__QueueJobClient<runtime.Types.Result.GetResult<$QueueJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of QueueJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobCountArgs} args - Arguments to filter QueueJobs to count.
     * @example
     * // Count the number of QueueJobs
     * const count = await prisma.queueJob.count({
     *   where: {
     *     // ... the filter for the QueueJobs we want to count
     *   }
     * })
    **/
    count<T extends QueueJobCountArgs>(args?: Subset<T, QueueJobCountArgs>): PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : GetScalarType<T['select'], QueueJobCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a QueueJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueueJobAggregateArgs>(args: Subset<T, QueueJobAggregateArgs>): PrismaPromise<GetQueueJobAggregateType<T>>;
    /**
     * Group by QueueJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends QueueJobGroupByArgs, HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>, OrderByArg extends True extends HasSelectOrTake ? {
        orderBy: QueueJobGroupByArgs['orderBy'];
    } : {
        orderBy?: QueueJobGroupByArgs['orderBy'];
    }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True ? `Error: "by" must not be empty.` : HavingValid extends False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: SubsetIntersection<T, QueueJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueJobGroupByPayload<T> : PrismaPromise<InputErrors>;
    /**
     * Fields of the QueueJob model
     */
    readonly fields: QueueJobFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for QueueJob.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
interface Prisma__QueueJobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the QueueJob model
 */
interface QueueJobFieldRefs {
    readonly id: FieldRef<"QueueJob", 'BigInt'>;
    readonly queue: FieldRef<"QueueJob", 'String'>;
    readonly key: FieldRef<"QueueJob", 'String'>;
    readonly cron: FieldRef<"QueueJob", 'String'>;
    readonly payload: FieldRef<"QueueJob", 'Json'>;
    readonly result: FieldRef<"QueueJob", 'Json'>;
    readonly error: FieldRef<"QueueJob", 'Json'>;
    readonly progress: FieldRef<"QueueJob", 'Int'>;
    readonly priority: FieldRef<"QueueJob", 'Int'>;
    readonly attempts: FieldRef<"QueueJob", 'Int'>;
    readonly maxAttempts: FieldRef<"QueueJob", 'Int'>;
    readonly runAt: FieldRef<"QueueJob", 'DateTime'>;
    readonly notBefore: FieldRef<"QueueJob", 'DateTime'>;
    readonly finishedAt: FieldRef<"QueueJob", 'DateTime'>;
    readonly processedAt: FieldRef<"QueueJob", 'DateTime'>;
    readonly failedAt: FieldRef<"QueueJob", 'DateTime'>;
    readonly createdAt: FieldRef<"QueueJob", 'DateTime'>;
    readonly updatedAt: FieldRef<"QueueJob", 'DateTime'>;
}
/**
 * QueueJob findUnique
 */
type QueueJobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * Filter, which QueueJob to fetch.
     */
    where: QueueJobWhereUniqueInput;
};
/**
 * QueueJob findUniqueOrThrow
 */
type QueueJobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * Filter, which QueueJob to fetch.
     */
    where: QueueJobWhereUniqueInput;
};
/**
 * QueueJob findFirst
 */
type QueueJobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * Filter, which QueueJob to fetch.
     */
    where?: QueueJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QueueJobs to fetch.
     */
    orderBy?: QueueJobOrderByWithRelationInput | QueueJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QueueJobs.
     */
    cursor?: QueueJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QueueJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QueueJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QueueJobs.
     */
    distinct?: QueueJobScalarFieldEnum | QueueJobScalarFieldEnum[];
};
/**
 * QueueJob findFirstOrThrow
 */
type QueueJobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * Filter, which QueueJob to fetch.
     */
    where?: QueueJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QueueJobs to fetch.
     */
    orderBy?: QueueJobOrderByWithRelationInput | QueueJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QueueJobs.
     */
    cursor?: QueueJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QueueJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QueueJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QueueJobs.
     */
    distinct?: QueueJobScalarFieldEnum | QueueJobScalarFieldEnum[];
};
/**
 * QueueJob findMany
 */
type QueueJobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * Filter, which QueueJobs to fetch.
     */
    where?: QueueJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QueueJobs to fetch.
     */
    orderBy?: QueueJobOrderByWithRelationInput | QueueJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing QueueJobs.
     */
    cursor?: QueueJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QueueJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QueueJobs.
     */
    skip?: number;
    distinct?: QueueJobScalarFieldEnum | QueueJobScalarFieldEnum[];
};
/**
 * QueueJob create
 */
type QueueJobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * The data needed to create a QueueJob.
     */
    data: XOR<QueueJobCreateInput, QueueJobUncheckedCreateInput>;
};
/**
 * QueueJob createMany
 */
type QueueJobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueueJobs.
     */
    data: QueueJobCreateManyInput | QueueJobCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * QueueJob createManyAndReturn
 */
type QueueJobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * The data used to create many QueueJobs.
     */
    data: QueueJobCreateManyInput | QueueJobCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * QueueJob update
 */
type QueueJobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * The data needed to update a QueueJob.
     */
    data: XOR<QueueJobUpdateInput, QueueJobUncheckedUpdateInput>;
    /**
     * Choose, which QueueJob to update.
     */
    where: QueueJobWhereUniqueInput;
};
/**
 * QueueJob updateMany
 */
type QueueJobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update QueueJobs.
     */
    data: XOR<QueueJobUpdateManyMutationInput, QueueJobUncheckedUpdateManyInput>;
    /**
     * Filter which QueueJobs to update
     */
    where?: QueueJobWhereInput;
    /**
     * Limit how many QueueJobs to update.
     */
    limit?: number;
};
/**
 * QueueJob updateManyAndReturn
 */
type QueueJobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * The data used to update QueueJobs.
     */
    data: XOR<QueueJobUpdateManyMutationInput, QueueJobUncheckedUpdateManyInput>;
    /**
     * Filter which QueueJobs to update
     */
    where?: QueueJobWhereInput;
    /**
     * Limit how many QueueJobs to update.
     */
    limit?: number;
};
/**
 * QueueJob upsert
 */
type QueueJobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * The filter to search for the QueueJob to update in case it exists.
     */
    where: QueueJobWhereUniqueInput;
    /**
     * In case the QueueJob found by the `where` argument doesn't exist, create a new QueueJob with this data.
     */
    create: XOR<QueueJobCreateInput, QueueJobUncheckedCreateInput>;
    /**
     * In case the QueueJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueJobUpdateInput, QueueJobUncheckedUpdateInput>;
};
/**
 * QueueJob delete
 */
type QueueJobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueJob
     */
    select?: QueueJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QueueJob
     */
    omit?: QueueJobOmit<ExtArgs> | null;
    /**
     * Filter which QueueJob to delete.
     */
    where: QueueJobWhereUniqueInput;
};
/**
 * QueueJob deleteMany
 */
type QueueJobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which QueueJobs to delete
     */
    where?: QueueJobWhereInput;
    /**
     * Limit how many QueueJobs to delete.
     */
    limit?: number;
};

type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
};
type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
};
type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
};
type JsonNullableFilter<$PrismaModel = never> = PatchUndefined<Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
};
type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
};
type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
};
type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
};
type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
};
type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
};
type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
};
type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
};
type JsonNullableWithAggregatesFilter<$PrismaModel = never> = PatchUndefined<Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
};
type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
};
type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
};
type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
};
type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
};
type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
};
type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
};
type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
};
type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
};
type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
};
type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
};
type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
};
type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
};
type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
};
type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
};
type NestedJsonNullableFilter<$PrismaModel = never> = PatchUndefined<Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
};
type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
};
type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
};
type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
};
type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
};
type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
};

type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
declare const Sql: typeof runtime.Sql;
type Sql = runtime.Sql;
type InputJsonValue$1 = runtime.InputJsonValue;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
type Union = any;
type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
type Boolean = True | False;
type True = 1;
type False = 0;
type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
type Keys<U extends Union> = U extends unknown ? keyof U : never;
type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "queueJob";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        QueueJob: {
            payload: $QueueJobPayload<ExtArgs>;
            fields: QueueJobFieldRefs;
            operations: {
                findUnique: {
                    args: QueueJobFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload> | null;
                };
                findUniqueOrThrow: {
                    args: QueueJobFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>;
                };
                findFirst: {
                    args: QueueJobFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload> | null;
                };
                findFirstOrThrow: {
                    args: QueueJobFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>;
                };
                findMany: {
                    args: QueueJobFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>[];
                };
                create: {
                    args: QueueJobCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>;
                };
                createMany: {
                    args: QueueJobCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: QueueJobCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>[];
                };
                delete: {
                    args: QueueJobDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>;
                };
                update: {
                    args: QueueJobUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>;
                };
                deleteMany: {
                    args: QueueJobDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: QueueJobUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: QueueJobUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>[];
                };
                upsert: {
                    args: QueueJobUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$QueueJobPayload>;
                };
                aggregate: {
                    args: QueueJobAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<AggregateQueueJob>;
                };
                groupBy: {
                    args: QueueJobGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<QueueJobGroupByOutputType>[];
                };
                count: {
                    args: QueueJobCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<QueueJobCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
declare const QueueJobScalarFieldEnum: {
    readonly id: "id";
    readonly queue: "queue";
    readonly key: "key";
    readonly cron: "cron";
    readonly payload: "payload";
    readonly result: "result";
    readonly error: "error";
    readonly progress: "progress";
    readonly priority: "priority";
    readonly attempts: "attempts";
    readonly maxAttempts: "maxAttempts";
    readonly runAt: "runAt";
    readonly notBefore: "notBefore";
    readonly finishedAt: "finishedAt";
    readonly processedAt: "processedAt";
    readonly failedAt: "failedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
type QueueJobScalarFieldEnum = (typeof QueueJobScalarFieldEnum)[keyof typeof QueueJobScalarFieldEnum];
declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'BigInt'
 */
type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
/**
 * Reference to a field of type 'BigInt[]'
 */
type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
/**
 * Reference to a field of type 'String'
 */
type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Json'
 */
type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Int'
 */
type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
type BatchPayload = {
    count: number;
};
type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
type GlobalOmitConfig = {
    queueJob?: QueueJobOmit;
};
type LogLevel = 'info' | 'query' | 'warn' | 'error';
type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};

type LogOptions<ClientOptions extends PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<ClientOptions['log']> : never : never;
interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more QueueJobs
   * const queueJobs = await prisma.queueJob.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends PrismaClientOptions = PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Subset<Options, PrismaClientOptions>): PrismaClient$1<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QueueJobs
 * const queueJobs = await prisma.queueJob.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
interface PrismaClient$1<in LogOpts extends LogLevel = never, in out OmitOpts extends PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): PrismaClient$1;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient$1, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.queueJob`: Exposes CRUD operations for the **QueueJob** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more QueueJobs
  * const queueJobs = await prisma.queueJob.findMany()
  * ```
  */
    get queueJob(): QueueJobDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}

/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QueueJobs
 * const queueJobs = await prisma.queueJob.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
declare const PrismaClient: PrismaClientConstructor;
type PrismaClient<LogOpts extends LogLevel = never, OmitOpts extends PrismaClientOptions["omit"] = PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = PrismaClient$1<LogOpts, OmitOpts, ExtArgs>;

type ITXClient = Omit<PrismaClient, ITXClientDenyList>;
type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
} & {};
type JobPayload = InputJsonValue$1;
type JobResult = InputJsonValue$1;
type DatabaseJob<Payload, Result> = Simplify<Omit<QueueJobModel, "payload" | "result"> & {
    payload: Payload;
    result: Result;
}>;
type JobCreator<T extends JobPayload> = (client: ITXClient) => Promise<T>;
type JobWorker<T extends JobPayload = JobPayload, U extends JobResult = JobResult> = (job: PrismaJob<T, U>, client: ITXClient) => Promise<U>;
type Adapter = PrismaPg;
type Log = PrismaClientOptions["log"];

type PrismaJobOptions = {
    tableName: string;
    client: ITXClient;
};
/**
 * Represents a job within a Prisma-managed queue.
 */
declare class PrismaJob<Payload, Result> {
    #private;
    readonly id: bigint;
    readonly createdAt: Date;
    /**
     * Constructs a new PrismaJob instance with the provided job record and database access objects.
     * @param record - The initial database job record.
     * @param model - The Prisma delegate used for database operations related to the job.
     * @param client - The Prisma client for executing arbitrary queries.
     */
    constructor(record: DatabaseJob<Payload, Result>, { tableName, client }: PrismaJobOptions);
    /**
     * Gets the current job record.
     */
    get record(): DatabaseJob<Payload, Result>;
    /**
     * Gets the job's unique key if any.
     */
    get key(): string | null;
    /**
     * Gets the job's queue name.
     */
    get queue(): string;
    /**
     * Gets the CRON expression associated with the job for recurring scheduling.
     */
    get cron(): string | null;
    /**
     * Gets the job's priority level.
     */
    get priority(): number;
    /**
     * Gets the payload associated with the job.
     */
    get payload(): Payload;
    /**
     * Gets the timestamp when the job was finished.
     */
    get finishedAt(): Date | null;
    /**
     * Gets the error record if the job failed.
     */
    get error(): runtime.JsonValue;
    /**
     * Updates the job's progress percentage.
     * @param progress - The new progress percentage.
     */
    progress(progress: number): Promise<DatabaseJob<Payload, Result>>;
    /**
     * Fetches the latest job record from the database and updates the internal state.
     */
    fetch(): Promise<DatabaseJob<Payload, Result>>;
    /**
     * Updates the job record in the database with new data.
     * @param data - The new data to be merged with the existing job record.
     */
    update(data: QueueJobUpdateInput): Promise<DatabaseJob<Payload, Result>>;
    /**
     * Deletes the job from the database.
     */
    delete(): Promise<DatabaseJob<Payload, Result>>;
    /**
     * Checks if the job is currently locked by another transaction.
     * @returns {Promise<boolean>} True if the job is locked, false otherwise.
     */
    isLocked(): Promise<boolean>;
}

type PrismaQueueOptions = {
    adapter: Adapter;
    log?: Log;
    name?: string;
    maxAttempts?: number | null;
    maxConcurrency?: number;
    pollInterval?: number;
    jobInterval?: number;
    tableName?: string;
    deleteOn?: "success" | "failure" | "always" | "never";
    /**
     * @deprecated This option is deprecated and will be removed in a future version.
     * The queue now uses JavaScript Date objects instead of SQL NOW() to avoid timezone issues.
     */
    alignTimeZone?: boolean;
};
type EnqueueOptions = {
    cron?: string;
    runAt?: Date;
    key?: string;
    maxAttempts?: number;
    priority?: number;
};
type ScheduleOptions = Omit<EnqueueOptions, "key" | "cron"> & {
    key: string;
    cron: string;
};
type PrismaQueueEvents<T extends JobPayload = JobPayload, U extends JobResult = JobResult> = {
    enqueue: (job: PrismaJob<T, U>) => void;
    dequeue: (job: PrismaJob<T, U>) => void;
    success: (result: U, job: PrismaJob<T, U>) => void;
    error: (error: unknown, job?: PrismaJob<T, U>) => void;
};
interface PrismaQueue<T extends JobPayload = JobPayload, U extends JobResult = JobResult> {
    on<E extends keyof PrismaQueueEvents<T, U>>(event: E, listener: PrismaQueueEvents<T, U>[E]): this;
    once<E extends keyof PrismaQueueEvents<T, U>>(event: E, listener: PrismaQueueEvents<T, U>[E]): this;
    emit<E extends keyof PrismaQueueEvents<T, U>>(event: E, ...args: Parameters<PrismaQueueEvents<T, U>[E]>): boolean;
}
declare class PrismaQueue<T extends JobPayload = JobPayload, U extends JobResult = JobResult> extends EventEmitter {
    private options;
    worker: JobWorker<T, U>;
    client: PrismaClient;
    private name;
    private config;
    private concurrency;
    private stopped;
    private abortController;
    /**
     * Constructs a PrismaQueue object with specified options and a worker function.
     * @param options - Configuration options for the queue.
     * @param worker - The worker function that processes jobs.
     */
    constructor(options: PrismaQueueOptions, worker: JobWorker<T, U>);
    /**
     * Starts the job processing in the queue.
     */
    start(): Promise<void>;
    /**
     * Stops the job processing in the queue.
     * Waits for all in-flight jobs to complete before returning.
     * @param options - Stop options
     * @param options.timeout - Maximum time in milliseconds to wait for in-flight jobs (default: 30000)
     */
    stop(options?: {
        timeout?: number;
    }): Promise<void>;
    /**
     * Adds a job to the queue.
     * @param payloadOrFunction - The job payload or a function that returns a job payload.
     * @param options - Options for the job, such as scheduling and attempts.
     */
    add: (payloadOrFunction: T | JobCreator<T>, options?: EnqueueOptions) => Promise<PrismaJob<T, U>>;
    /**
     * Adds a job to the queue.
     * @param payloadOrFunction - The job payload or a function that returns a job payload.
     * @param options - Options for the job, such as scheduling and attempts.
     */
    enqueue(payloadOrFunction: T | JobCreator<T>, options?: EnqueueOptions): Promise<PrismaJob<T, U>>;
    /**
     * Schedules a job according to the cron expression or a specific run time.
     * @param options - Scheduling options including cron, key, and run time.
     * @param payloadOrFunction - The job payload or a function that returns a job payload.
     */
    schedule(options: ScheduleOptions, payloadOrFunction: T | JobCreator<T>): Promise<PrismaJob<T, U>>;
    /**
     * Polls the queue and processes jobs according to the configured intervals and concurrency settings.
     */
    private poll;
    /**
     * Dequeues and processes the next job in the queue. Handles locking and error management internally.
     * @returns {Promise<PrismaJob<T, U> | null>} The job that was processed or null if no job was available.
     */
    private dequeue;
    /**
     * Counts the number of jobs in the queue, optionally only those available for processing.
     * @param {boolean} onlyAvailable - If true, counts only jobs that are ready to be processed.
     * @returns {Promise<number>} The number of jobs.
     */
    size(onlyAvailable?: boolean): Promise<number>;
}

type InputJsonValue = InputJsonValue$1;
declare function prepareForJson<T>(originalValue: T): InputJsonValue;
declare function restoreFromJson<T = unknown>(preparedValue: InputJsonValue): T;

/**
 * Factory function to create a new PrismaQueue instance.
 * This function simplifies the instantiation of a PrismaQueue by wrapping it into a function call.
 *
 * @param options - The configuration options for the PrismaQueue. These options configure how the queue interacts with the database and controls job processing behavior.
 * @param worker - The worker function that will process each job. The worker function is called with each dequeued job and is responsible for executing the job's logic.
 *
 * @returns An instance of PrismaQueue configured with the provided options and worker.
 *
 * @template T - The type of the job payload. It extends JobPayload which can be further extended to include more specific data types as needed.
 * @template U - The type of the result expected from the worker function after processing a job. It extends JobResult which can be specialized based on the application's needs.
 *
 * @example
 * // Create a new queue for email sending jobs
 * const emailQueue = createQueue<EmailPayload, void>({
 *   name: 'emails',
 *   prisma: new PrismaClient(),
 *   pollInterval: 5000,
 * }, async (job) => {
 *   await sendEmail(job.payload);
 * });
 */
declare const createQueue: <T extends JobPayload = JobPayload, U extends JobResult = JobResult>(options: PrismaQueueOptions, worker: JobWorker<T, U>) => PrismaQueue<T, U>;

export { type Adapter, type DatabaseJob, type EnqueueOptions, type ITXClient, type JobCreator, type JobPayload, type JobResult, type JobWorker, type Log, PrismaJob, type PrismaJobOptions, PrismaQueue, type PrismaQueueEvents, type PrismaQueueOptions, type ScheduleOptions, type Simplify, createQueue, prepareForJson, restoreFromJson };
