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
        board: z.string(),
        title: z.string().min(1).max(20),
        state: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
      }),
    )
    .mutation(async ({ctx, input}) => {
      const task = ctx.prisma.task.create({
        data: {
          authorId: ctx.currentUser,
          content: input.content,
          board: {connect: {id: input.board}},
          title: input.title,
          state: input.state,
        },
      });

      return task;
    }),

  update: privateProcedure
    .input(
      z.object({
        id: z.string(),
        content: z.string().min(1).max(255),
        title: z.string().min(1).max(20),
        state: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
      }),
    )
    .mutation(async ({ctx, input}) => {
      const task = ctx.prisma.task.update({
        where: {id: input.id},
        data: {
          content: input.content,
          title: input.title,
          state: input.state,
        },
      });

      return task;
    }),
});
