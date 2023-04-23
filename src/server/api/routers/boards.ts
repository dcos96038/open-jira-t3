import {z} from "zod";

import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";

export const boardsRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ctx}) => {
    return ctx.prisma.board.findMany({where: {authorId: ctx.currentUser}});
  }),
});
