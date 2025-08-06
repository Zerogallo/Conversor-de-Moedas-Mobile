
<div align="center">
 <img src="https://github.com/Zerogallo/Conversor-de-Moedas-Mobile/blob/main/WhatsApp%20Image%202025-08-06%20at%2016.45.53.jpeg" style="width: 500px; height: 700px;"/>
</div>

### *Conversor de Moedas - React Native App*  


Aplicativo móvel para conversão de valores entre moedas internacionais (USD, BRL, EUR, GBP, JPY, CAD, AUD, CHF). Exibe resultados em tempo real com taxa de câmbio atualizada.

---

### *Principais Funcionalidades*
1. *Seleção Intuitiva de Moedas*  
   - Interface com dropdowns "De" → "Para"  
   - Suporte para 8 moedas principais  
2. *Cálculo Automático*  
   - Conversão instantânea ao inserir valores  
   - Exibição clara do resultado (ex: R$5.50)  
3. *Transparência Financeira*  
   - Visualização da taxa de câmbio aplicada (ex: 1 USD = 5.5000 BRL)  

---

### *Estrutura do Projeto*

    src/
    ├── App.js                # Componente principal

    ├── Appsstyles.js         # Estilos globais

    ├── components/

    │   ├── CurrencySelector  # Dropdowns de moedas

    │   ├── ConverterButton   # Botão "Converter"

    │   └── DisplayResult     # Exibição do resultado
    
    assets/
    ├── icons/                # Ícones das moedas

    └── WhatsApp image 2025-06-08 at 16.6.5.53.jpeg 


---

### *Tecnologias Utilizadas*
- React Native (Expo)  
- JavaScript  
- Styled Components (Appsstyles.js)  

---

### *Status do Projeto*  
⚠️ *Observação do Ambiente*  
- Configuração inicial do Metro Bundler em andamento  
- Possíveis ajustes necessários em package.json vs package-fock.json  

---

### *Próximos Passos (To-Do)*  
1. Integrar API de cotações em tempo real  
2. Implementar histórico de conversões  
3. Adicionar gráficos de variação cambial  

---



*Instalação:*  
bash
npm install
expo start

