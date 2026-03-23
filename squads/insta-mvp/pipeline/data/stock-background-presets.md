# Presets de imagem para panorama (carrossel infinito)

Cada URL é uma cena **ultra-wide** adequada a fatiar em N painéis. **Não** usar sempre a mesma: o script `stock-panorama-backgrounds.cjs` escolhe uma por **hash do `run_id`** quando você **não** passa `--url`.

| ID | Tema | Notas |
|----|------|--------|
| `cyber` | Circuitos / tech azul | Abstrato, alta largura |
| `orbit` | Terra / rede global | Escuro, contraste |
| `purple` | Gradiente abstrato roxo | Alinha MVP Flow |
| `neon` | Cidade / luzes noturnas | Textura contínua |
| `data` | Visual “dados” / linhas | Neutro escuro |

URLs completas ficam em `stock-background-presets.json` (gerado ao lado deste arquivo) ou no próprio `stock-panorama-backgrounds.cjs`.

**Override manual:** `node stock-panorama-backgrounds.cjs <run> --url "https://..."`
