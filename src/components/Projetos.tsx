import "./projetos.css"
import { useEffect, useState } from 'react'

type Card = { imagem: string; titulo: string; descricao: string }

export default function Projetos() {
    const [cards, setCards] = useState<Card[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false

        async function load() {
            try {
                const res = await fetch('/projects.json')
                if (!res.ok) throw new Error('Failed to load')
                const data: Card[] = await res.json()
                if (!cancelled) setCards(data)
            } catch (e) {
                console.error('Error loading projects:', e)
                if (!cancelled) setCards([])
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        load()

        return () => { cancelled = true }
    }, [])

    const skeletonItems = Array.from({ length: 3 }).map((_, i) => (
        <div key={`s-${i}`}>
            <article className="projeto">
                <div className="skeleton-img" />
                <div className="content">
                    <div className="skeleton-line title" />
                    <div className="skeleton-line" />
                    <div className="skeleton-line short" />
                </div>
            </article>
            <hr />
        </div>
    ))

    return (
        <section id="projetos" className="projetos">
            <h2>Projetos</h2>

            {loading && skeletonItems}

            {!loading && cards && cards.length === 0 && (
                <p>Nenhum projeto encontrado.</p>
            )}

            {!loading && cards && cards.map((card, index) => (
                <div key={index}>
                    <article className="projeto">
                        <img src={card.imagem} alt={card.titulo} />

                        <div className="content">
                            <h3>{card.titulo}</h3>
                            <p>{card.descricao}</p>
                        </div>
                    </article>
                    <hr />
                </div>
            ))}
        </section>
    )
}