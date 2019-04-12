
import { Concurso } from './concurso';
import { Photo } from '../photo/photo';
import { Fotografo } from '../fotografo/fotografo';
export class ConcursoDetail extends Concurso{
    
    fotosEnConcurso: Photo[];
    
    
    fotografos: Fotografo[];
    
}
