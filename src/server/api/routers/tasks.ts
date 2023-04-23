import {z} from "zod";

import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ctx}) => {
    return ctx.prisma.task.findMany({where: {authorId: ctx.currentUser}});
  }),

  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(255),
        boardId: z.string(),
        title: z.string().min(1).max(20),
        state: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
      }),
    )
    .mutation(async ({ctx, input}) => {
      const task = ctx.prisma.task.create({
        data: {
          authorId: ctx.currentUser,
          content: input.content,
          board: {connect: {id: input.boardId}},
          title: input.title,
          state: input.state,
        },
      });

      return task;
    }),
});
