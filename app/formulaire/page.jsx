export default function AddEmployee() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Ajouter un employé</h2>

      <input placeholder="Nom" /><br /><br />
      <input placeholder="Prénom" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input placeholder="Poste" /><br /><br />
      <input placeholder="Département" /><br /><br />
      
      <button>Ajouter</button>
    </div>
  );
}
