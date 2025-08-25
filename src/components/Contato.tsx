import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import "./contato.css"

export default function Contato() {
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleOpen() {
        setSubmitted(false);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setSubmitting(false);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);

        // Simula envio assíncrono
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 1200);
    }

    return (
        <>
            <section id="contato" className="contato">
                <div className="icons">
                    <FaFacebookSquare className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                    <FaLinkedin className="icon" />
                </div>

                {/* botão abaixo das "logos" (ícones) */}
                <div className="contact-button-wrap">
                    <button className="contact-button" onClick={handleOpen}>Entrar em contato</button>
                </div>

                <p>© Gabriel Cirillo 2025</p>

                {open && (
                    <div className="modal-overlay" role="dialog" aria-modal="true">
                        <div className="modal">
                            <header className="modal-header">
                                <h3>Fale comigo</h3>
                                <button className="modal-close" onClick={handleClose} aria-label="Fechar">×</button>
                            </header>

                            {!submitted ? (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <label className="field">
                                        <span>Nome</span>
                                        <input name="name" required />
                                    </label>

                                    <label className="field">
                                        <span>Email</span>
                                        <input name="email" type="email" required />
                                    </label>

                                    <label className="field">
                                        <span>Mensagem</span>
                                        <textarea name="message" rows={4} required></textarea>
                                    </label>

                                    <div className="modal-actions">
                                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                                        <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? 'Enviando...' : 'Enviar'}</button>
                                    </div>
                                </form>
                            ) : (
                                <div className="success">
                                    <p>Mensagem enviada com sucesso.</p>
                                    <div className="modal-actions">
                                        <button className="btn btn-primary" onClick={handleClose}>Fechar</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}