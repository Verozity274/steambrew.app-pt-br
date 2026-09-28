"use client";

import "@/css/index.css";
import RenderFooter from "@/components/FooterComponent";
import RenderHeader from "@/components/HeaderComponent";
import { fluenty } from "@/components/RenderFluenty";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FluentyClientProps {
    isSteamClient: boolean;
}

export default function FluentyClient({ isSteamClient }: FluentyClientProps) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Images: { Panzoom: { maxScale: 2 } },
            Thumbs: { type: "classic" },
        });
    }, []);

    return (
        <div>
            <div className="os-resize-observer-host observed">
                <div className="os-resize-observer"></div>
            </div>
            <div className="os-padding">
                <div className="os-content">
                    <div
                        className="vm-placement"
                        data-id="60f82387ffc37172cbbc0201"
                    ></div>
                    <div
                        className="vm-placement"
                        id="vm-av"
                        data-format="isvideo"
                    ></div>
                    {!isSteamClient ? <RenderHeader /> : <></>}
                    <section id="main-page-content">
                        <section id="addon-details" className="page-section">
                            <div className="page-section-inner theme-view-panel">
                                <img
                                    loading="lazy"
                                    src={
                                        "https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg"
                                    }
                                    className="addon-backdrop"
                                />
                                <div
                                    className="flex-container align-center justify-between"
                                    id="addon-details-title"
                                >
                                    <div className="disabled sign-in-gate"></div>
                                </div>
                                <div
                                    className="flex-container"
                                    id="addon-splitview-container"
                                >
                                    <div
                                        className="addon-details-column"
                                        id="addon-details-right-column"
                                    >
                                        <div
                                            className="addon-details-segment"
                                            id="addon-details-column-actions"
                                        >
                                            <a
                                                className="link_link__hbWKh link_secondary__F1rqx"
                                                href="/themes"
                                            >
                                                <small>← Voltar aos Temas</small>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="addon-author-container"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/static/steambrew-logo.png"
                                                />
                                                <h5>Steam Homebrew</h5>
                                            </a>
                                            <h1 className="title">Fluenty</h1>
                                            <div className="title-description theme-desc">
                                                {fluenty?.description}
                                            </div>
                                            <section id="addon-actions">
                                                <div className="btn-container direction-column">
                                                    <div className="wrap-buttons">
                                                        <a
                                                            href="https://www.patreon.com/FluentyforSteam"
                                                            className="btn btn-primary"
                                                            id="download-btn"
                                                        >
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmUlEQVR4nO2ZT4hNURzHPywMYxaisDXjz4YhIskUYzNi1pQ/CxJrigXNjClWhCWGWFFsGaWkKWPLFJN/ZcpKM/7n+TN5OnVufbuNe+85d+acl96nTq/eud/v73vfu+93z7kP6vxfbAEuAy+Ab3YMA5fsXM3SDAwA1ZzxAFhMjbEB+FggfDLGgI3UCEtS4SvAOWAdMBtoBNba9ypy3CjQEjv8NOChhBoBlmccvwJ4l7qcorIp9clnhU9oBX6Irp2IXJUg5hIpygXRXSQizyWIuc6Lsl50wwRiJdBv+/pEnaXJHvfBoRuZ8cXqZsh7X4G79nKbFLYBv3OCJLiEz9OamlvLhp9b8FOdihOo2nY7p8wJ7BWzV8CifxR0JUvbDLyW+T0l8nNajHocQuSRp+2ReZPBm+titM8xRBZ52v0yf40S3BejjtRcsjQwr67kaTukrskwKb0+3dZO2ZZnXl3J07ZK3WeU4LMYmY4UinlS95OvSZOYfCf8QrEywY3SiWViYNpaaN5I/aU+Bu1iYHZboRmQ+pt9DHaLwQ3Cc1Pq7/IxOCYGZwjPWal/1MdA1+2HCc8RqX/ex+C2GOwgPDul/i0fg8di0EZ42qT+Ix+DETEwK8TQtEj9t67i6cBPK/4DzCQ8s+QEftlMhVmQ2lTEYkxyzHcRrhbhEPEYkhyrXITbRWg287G4JznM3rwwB0XYRzyuSI4DLsKTIuwlHr0ZW9pM+kRovo1YHJIc5j+GwvSLsJN4dEqOOy7CpyI0HSkWayTHExfhqAjNPSEWCyXHexdhcheu2jtiLBolh3ks77WdOw40EJ4G4ITkeOki1idjtTK6XE7ALN4GayB01Y5BnwWlufa77ROJ8Qihx+0D5a7Iv8M6deowhfwF+BC2GOS0rI0AAAAASUVORK5CYII=" />
                                                            <span draggable>
                                                                Comprar • US$5
                                                                USD
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </section>
                                            <section id="about-addon">
                                                <span className="addon-metadata-row">
                                                    <strong>Downloads: </strong>{" "}
                                                    {fluenty.downloads}{" "}
                                                </span>
                                                <span className="addon-metadata-row">
                                                    <strong>Lançado: </strong>
                                                    24 de novembro de 2023
                                                </span>
                                                <span className="addon-metadata-row">
                                                    <strong>ID: </strong>
                                                    fluenty-steam
                                                </span>
                                            </section>
                                            <section id="addon-author"></section>
                                        </div>

                                        <div
                                            className="addon-details-segment"
                                            id="addon-details-column-server"
                                        >
                                            <section id="addon-server">
                                                <div className="flex-container align-center">
                                                    <img
                                                        loading="lazy"
                                                        src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/static/steambrew-logo.png"
                                                    />
                                                    <div className="flex-container justify-center direction-column">
                                                        <h5>Steam Homebrew</h5>
                                                        <p>Servidor de Suporte (Inglês)</p>
                                                    </div>
                                                </div>
                                                <a
                                                    rel="noreferrer noopener"
                                                    target="_blank"
                                                    className="btn btn-primary btn-join-server"
                                                    href="/discord"
                                                >
                                                    <span>Entrar no Servidor (Inglês)</span>
                                                </a>
                                            </section>
                                        </div>

                                        <div
                                            className="addon-details-segment"
                                            id="addon-details-column-tags"
                                        >
                                            <h3 className="addon-details-section-header">
                                                Tags
                                            </h3>
                                            <section>
                                                <div className="addon-tags">
                                                    <span className="addon-tag">
                                                        Escuro
                                                    </span>
                                                    <span className="addon-tag">
                                                        Fluent
                                                    </span>
                                                    <span className="addon-tag">
                                                        Minimalista
                                                    </span>
                                                    <span className="addon-tag">
                                                        Confortável
                                                    </span>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div
                                        className="addon-details-column"
                                        id="addon-details-left-column"
                                    >
                                        <article className="addon-details-segment markdown-readme-content">
                                            <div className="markdown-body">
                                                <div>
                                                    <h1>
                                                        Fluenty, feito com ❤️ por
                                                        Millennium
                                                    </h1>
                                                    <p>
                                                        Inspirado no
                                                        Modelo Fluenty da Microsoft Store
                                                        lançado
                                                        com o Windows 11
                                                    </p>
                                                    <p>
                                                        Você pode se perguntar por que este
                                                        tema custa dinheiro e
                                                        não é gratuito como os outros. Para oferecer a
                                                        melhor experiência de usuário,
                                                        com servidores rápidos e seguros (incluindo este
                                                        site), precisamos de financiamento de alguma forma. É por isso que
                                                        criamos este tema: para dar
                                                        algo em troca
                                                        do seu apoio,
                                                        sem forçar anúncios ou
                                                        outros métodos irritantes de financiamento.
                                                    </p>
                                                    <p>
                                                        Dito isso,
                                                        lembre-se de que, mesmo que as atualizações
                                                        às vezes sejam pouco frequentes,
                                                        estamos sempre trabalhando em algo novo e empolgante,
                                                        mesmo que não seja diretamente
                                                        relacionado ao Fluenty.

                                                        Somos uma equipe pequena e estamos fazendo o
                                                        possível para equilibrar nosso
                                                        tempo entre o Millennium, o Fluenty
                                                        e nossas vidas pessoais.
                                                    </p>
                                                    <p>
                                                        Obrigado pela
                                                        compreensão, e nós
                                                        esperamos que você
                                                        goste do tema. ❤️
                                                    </p>
                                                    <a
                                                        href="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/mainHeader.jpg"
                                                        target="_blank"
                                                        data-fancybox
                                                    >
                                                        <img
                                                            src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/mainHeader.jpg"
                                                            alt="Skin da Steam"
                                                        />
                                                    </a>
                                                    <div className="FluentyImageContainer">
                                                        <a
                                                            href="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/gameLib.jpg"
                                                            target="_blank"
                                                            data-fancybox
                                                        >
                                                            <img
                                                                src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/gameLib.jpg"
                                                                alt="Skin da Steam"
                                                            />
                                                        </a>
                                                        <a
                                                            href="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/friendsChat.jpg"
                                                            target="_blank"
                                                            data-fancybox
                                                        >
                                                            <img
                                                                src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/friendsChat.jpg"
                                                                alt="Skin da Steam"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="FluentyImageContainer">
                                                        <a
                                                            href="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/storePage.jpg"
                                                            target="_blank"
                                                            data-fancybox
                                                        >
                                                            <img
                                                                src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/storePage.jpg"
                                                                alt="Skin da Steam"
                                                            />
                                                        </a>
                                                        <a
                                                            href="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/gameStorePage.jpg"
                                                            target="_blank"
                                                            data-fancybox
                                                        >
                                                            <img
                                                                src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/gameStorePage.jpg"
                                                                alt="Skin da Steam"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <h2>Instalação</h2>
                                                <p>
                                                    Adquira o tema através de uma
                                                    assinatura no nosso Patreon.
                                                </p>
                                                <p>
                                                    Cancelar a assinatura
                                                    resulta em manter o
                                                    tema, porém você não
                                                    receberá atualizações futuras
                                                    a menos que assine novamente.
                                                </p>
                                                <p>
                                                    Após a assinatura, baixe
                                                    a versão mais recente listada
                                                    e então abra o Millennium e
                                                    clique na pasta "Open Skins".

                                                    Arraste o tema baixado
                                                    para esse diretório e
                                                    extraia-o.
                                                </p>
                                                <p>
                                                    Selecione-o no menu e
                                                    está pronto para usar!
                                                </p>
                                                <h2>Configuração</h2>
                                                <p>
                                                    O Fluenty vem com várias
                                                    opções de ajuste que você pode
                                                    personalizar.
                                                </p>
                                                <p>
                                                    Você pode encontrar mais opções
                                                    depois de instalar o Fluenty
                                                    acessando as configurações
                                                    do tema. Abaixo estão
                                                    exemplos das opções da barra lateral
                                                    do Fluenty e o alinhamento
                                                    do botão de jogar.
                                                </p>
                                                <a
                                                    href="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/tweakOptions.jpg"
                                                    target="_blank"
                                                    data-fancybox
                                                >
                                                    <img
                                                        src="https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/steambrew/www/src/media/images/tweakOptions.jpg"
                                                        alt="Skin da Steam"
                                                    />
                                                </a>
                                                <h2>Aviso</h2>
                                                <p>
                                                    Fluenty está muito perto de
                                                    ser finalizado, porém ainda está
                                                    em desenvolvimento e nem tudo está
                                                    perfeito.

                                                    Espere encontrar bugs e reporte-os
                                                    no servidor do Discord (Inglês)
                                                    caso encontre algum!
                                                </p>
                                                <br />
                                                <br />
                                                <b>
                                                    Copyright Project-Millennium
                                                    © {new Date().getFullYear()}
                                                </b>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    {!isSteamClient ? <RenderFooter /> : <></>}
                </div>
            </div>
        </div>
    );
}
