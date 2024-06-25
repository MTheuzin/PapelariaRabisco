import Headerb from '../components/Headerb'
import Titulo from '../components/Titulo'
import CardList from '@/components/CardListFunc'

import { useState, useEffect } from 'react'

import { getFuncionarios } from '@/services/apiReqRes'

export default function contato() {

    const [funcionarios, setFuncionarios] = useState([])

    async function buscaFuncionarios() {
        try {
            const data = await getFuncionarios()
            console.log(data)
            setFuncionarios(data)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
    }
    
    useEffect(() => {
        buscaFuncionarios()
    }, [])

    return (
        <>
            <Headerb />
            <Titulo texto="Conheça nossa Equipe!" />
            <CardList funcionarios={ funcionarios } />
        </>
    )
}