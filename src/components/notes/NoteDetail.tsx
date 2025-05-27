import { deleteNote } from "@/api/NoteApi";
import { useAuth } from "@/hooks/useAuth";
import type { Note } from "@/types/index";
import { formatDate } from "@/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

type NoteDetailProps = {
  note: Note;
};

export default function NoteDetail({ note }: NoteDetailProps) {
  const { data, isLoading } = useAuth();
  const canDelete = useMemo(() => data?._id === note.createdBy._id, [data]);
  const params = useParams();
  const projectId = params.projectId!;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteNote,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryclient.invalidateQueries({ queryKey: ["task", taskId] });
      toast.success(data);
    },
  });

  const handleDeleteNote = () => {
    const data = {
      projectId,
      taskId,
      noteId: note._id,
    };
    mutate(data);
  };

  if (isLoading) return "Cargando...";
  return (
    <div className="py-2 flex justify-between items-center">
      <div>
        <p>
          <span className="font-bold text-fuchsia-600">
            {note.createdBy.name}:
          </span>{" "}
          {note.content}
        </p>
        <p className="text-xs text-slate-500">{formatDate(note.createdAt)}</p>
      </div>
      {canDelete && (
        <button
          type="button"
          onClick={handleDeleteNote}
          className="bg-red-500 hover:bg-red-600 p-2 text-s text-white font-bold cursor-pointer transition-colors"
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
