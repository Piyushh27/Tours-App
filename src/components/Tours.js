import Card from './Card';

function Tours({tours,removeTour}){
    return(
        <div className='container'> 
           <div>
           <h2 className='tittle'>Tours</h2>
           </div>
           <div className='cards'>
           {
               tours.map( (tours)=> {
               return <Card key={tours.id} {...tours} removeTour= {removeTour}></Card>
           } )
           }
           </div>

        </div>
    );
}
export default Tours; 