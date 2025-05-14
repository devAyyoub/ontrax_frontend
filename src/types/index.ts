import {z} from 'zod'

/** Tasks */
export const TaskStatusSchema = z.enum(["pending", "onHold", "inProgress", "under_review", "completed"])

export const taskSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: TaskStatusSchema
})

export type Task = z.infer<typeof taskSchema>
export type TaskFormData = Pick<Task, 'name' | 'description'>

/** Projects */
export const projectSchema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string()
})

export const dashboardProjectSchema = z.array(
    projectSchema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true
    })
)

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'projectName' | 'clientName' | 'description'>
export type DashboardProject = z.infer<typeof dashboardProjectSchema>