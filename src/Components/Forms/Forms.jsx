import Input from './Input/Input.jsx'
import './styles.css'

function Forms({adicionarDado, editarDado, setNovoDado, novoDado, edit}){
   return (
      <div className="container-forms">
         <h1>LEARN CRUD</h1>
         <Input 
            name="NOME" 
            value={novoDado.nome} 
            type="name" 
            onChange={(e) => setNovoDado({...novoDado, nome: e.target.value})}
         />
         <Input
            name="E-MAIL" 
            value={novoDado.email} 
            type="e-mail" 
            onChange={(e) => setNovoDado({...novoDado, email: e.target.value})}
         />
         <Input 
            name="TELEFONE" 
            value={novoDado.fone} 
            type="fone" 
            onChange={(e) => setNovoDado({...novoDado, fone: e.target.value})}
         />
         <Input 
            name="DATA" 
            type="date"
            value={novoDado.data_nascimento}
            onChange={(e) => setNovoDado({...novoDado, data_nascimento: e.target.value})}
         />

         <div className="button">
            {
               edit == false ? (
                  <button type="button" onClick={() => adicionarDado(novoDado)}>CADASTRAR</button>
               ) : (
                  <button type="button" onClick={() => editarDado(novoDado._id)}>CADASTRAR</button>
               )
            }
         </div>
      </div>
   )
}

export default Forms