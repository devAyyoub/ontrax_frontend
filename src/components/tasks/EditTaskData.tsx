import { getTaskById } from "@/api/TaskApi";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import EditTaskModal from "./EditTaskModal";

export default function EditTaskData() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const params = useParams()

  const taskId = queryParams.get('editTask')!
  const projectId = params.projectId!
    
    const { data, isLoading } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId
  });
  
  
  if (data) return <EditTaskModal/>
}
