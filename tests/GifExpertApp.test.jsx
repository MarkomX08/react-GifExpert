import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp/>', () => { 

    test('', () => { 
        const category = 'One';
        render(<GifExpertApp onAddCategory= {category}/>);
        screen.debug();
     })
 })