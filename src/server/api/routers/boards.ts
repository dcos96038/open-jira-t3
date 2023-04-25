import {z} from "zod";

import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";

export const boardsRouter = createTRPCRouter({
  getAll: privateProcedure.query(async ({ctx}) => {
    const boards = await ctx.prisma.board.findMany({
      where: {
        authorId: ctx.currentUser,
      },
    });

    const tasks = await ctx.prisma.task.findMany({
      where: {
        authorId: ctx.currentUser,
      },
    });

    const boardsWithTaskCount = boards.map((board) => {
      const taskCount = tasks.filter((task) => task.boardId === board.id).length;

      return {
        ...board,
        taskCount,
      };
    });

    return boardsWithTaskCount;
  }),
});
