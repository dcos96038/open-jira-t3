import {Task} from "@prisma/client";
import React, {createContext, useCallback, useContext, useMemo, useState} from "react";

interface ContextProps {
  selectedTask?: Task;
  isDragging: boolean;
  onDragStart: (task: Task) => void;
  onDragEnd: () => void;
}

const DragNDropContext = createContext<ContextProps>({} as ContextProps);

export function useDragNDrop() {
  return useContext(DragNDropContext);
}

export const DragNDropProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task>();

  const onDragStart = useCallback((task: Task) => {
    setSelectedTask(task);
    setIsDragging(true);
  }, []);

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const value = useMemo<ContextProps>(
    () => ({
      selectedTask,
      isDragging,
      onDragStart,
      onDragEnd,
    }),
    [isDragging, onDragStart, onDragEnd],
  );

  return <DragNDropContext.Provider value={value} {...props} />;
};
