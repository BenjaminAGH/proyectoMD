import EditIncidentForm from "@/components/EditIncidentForm";

const getIncidentById = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/incidentes/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Incidente");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditIncident({ params }) {
  const { id } = params;
  const incidente = await getIncidentById(id);
  const { titulo, descripcion, tipo, gravedad, completado } = incidente;

  return <EditIncidentForm id={id} titulo={titulo} descripcion={descripcion} tipo={tipo} gravedad ={gravedad} completado={completado} />;
}