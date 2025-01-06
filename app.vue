<template>
    <div class="container">
        <header class="header">
            <h1>Projeto PWA em Nuxt 3</h1>
        </header>
        <main class="main">
            <section class="hero">
                <h2>Bem-vindo ao Futuro</h2>
                <p>Transforme suas ideias em experiências incríveis com nossa aplicação PWA.</p>
                <button class="cta-button">Saiba Mais</button>
            </section>
            <section id="features" class="features">
                <h3>Principais Recursos</h3>
                <div class="feature-list">
                    <div class="feature-item">
                        <h4>Rápido</h4>
                        <p>Carregamento instantâneo para manter seus usuários conectados.</p>
                    </div>
                    <div class="feature-item">
                        <h4>Confiável</h4>
                        <p>Funciona offline para uma experiência contínua.</p>
                    </div>
                    <div class="feature-item">
                        <h4>Responsivo</h4>
                        <p>Perfeito em qualquer dispositivo.</p>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <p>© 2025 Projeto PWA. Todos os direitos reservados.</p>
        </footer>
    </div>
    <VitePwaManifest />
</template>

<style>
.container {
	font-family: Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f4f4f4;
	color: #333;
	min-height: 100vh;
	margin: 0;
}

.header {
	width: 100%;
	padding: 20px;
	background-color: #ff5722;
	color: white;
	text-align: center;
}

.header h1 {
	margin: 0;
	font-size: 2.5rem;
}

.navigation {
	margin-top: 10px;
}

.navigation a {
	margin: 0 15px;
	color: white;
	text-decoration: none;
	font-weight: bold;
}

.navigation a:hover {
	text-decoration: underline;
}

.main {
	padding: 40px;
	text-align: center;
}

.hero {
	margin-bottom: 50px;
}

.hero h2 {
	font-size: 2rem;
	margin-bottom: 20px;
}

.hero p {
	font-size: 1.2rem;
	margin-bottom: 30px;
}

.cta-button {
	padding: 10px 20px;
	background-color: #ff5722;
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 1rem;
	cursor: pointer;
}

.cta-button:hover {
	background-color: #e64a19;
}

.features {
	margin-top: 50px;
}

.features h3 {
	font-size: 1.8rem;
	margin-bottom: 30px;
}

.feature-list {
	display: flex;
	justify-content: space-around;
}

.feature-item {
	max-width: 200px;
	text-align: left;
}

.feature-item h4 {
	font-size: 1.2rem;
	margin-bottom: 10px;
	color: #ff5722;
}

.feature-item p {
	font-size: 0.9rem;
}

.footer {
	width: 100%;
	padding: 20px;
	background-color: #333;
	color: white;
	text-align: center;
	margin-top: auto;
}
</style>
