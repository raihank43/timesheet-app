"use client";
import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import AddProjectModal from "./AddProjectModal";
import findProjectNameById from "../utils/findProjectNameById";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function SelectProjectOption({
  projectId,
  setProjectId,
  setSelectedProjectName,
}) {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = React.useState([]);

  async function fetchProjects() {
    const response = await fetch(`${baseURL}projects`);
    const data = await response.json();
    setProjects(data);
  }

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (event, newValue) => {
    const projectName = findProjectNameById(newValue, projects);
    setSelectedProjectName(projectName);
    setProjectId(newValue);
  };

  return open ? (
    <AddProjectModal
      open={open}
      setOpen={setOpen}
      fetchProjects={fetchProjects}
    />
  ) : (
    <Select
      placeholder="Pilih Proyek"
      indicator={<KeyboardArrowDown />}
      onChange={handleChange}
      required
      sx={{
        width: "100%",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      <Option
        value="all"
        className="font-bold text-custom-red"
        onClick={() => {
          console.log("Add Project clicked");
          setOpen(true);
        }}
      >
        + Tambah Proyek
      </Option>
      {projects.map((project) => (
        <Option key={project.id} value={project.id}>
          {project.name}
        </Option>
      ))}
    </Select>
  );
}
