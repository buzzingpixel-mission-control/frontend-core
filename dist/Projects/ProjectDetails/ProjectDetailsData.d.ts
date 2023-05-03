import { ProjectWithViewOptions } from '../Projects';
import { ProjectDetailsSection } from './ProjectDetailsSection';
declare global {
    interface Window {
        projectDetailsSections: Array<ProjectDetailsSection>;
    }
}
export declare const getProjectDetailsSections: () => ProjectDetailsSection[];
export declare const addProjectDetailsSection: (section: ProjectDetailsSection) => void;
export declare const useProjectDetailsData: (slug: string) => {
    status: 'loading' | 'error' | 'success';
    data?: ProjectWithViewOptions;
};
