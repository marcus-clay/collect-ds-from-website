# Figma ↔ Claude ↔ Storybook — Workflow

> Architecture sans Token Studio, sans pipeline de tokens.
> Claude est le cerveau de traduction entre Figma et le code.

---

## Les 2 MCPs Figma

| MCP | Direction | Ce que fait Claude avec |
|-----|-----------|------------------------|
| **Figma MCP** (`figma/mcp`) | Figma → Claude | Lire les frames, styles, composants, auto-layout, variantes |
| **Figma Console MCP** | Claude → Figma | Créer des frames, modifier des styles, écrire des annotations, créer des composants |

---

## Flux de travail — 3 scénarios

### Scénario A : Figma → Code (import)

```
Designer crée / modifie un composant dans Figma
          │
          ▼
Claude (Figma MCP) lit le composant :
  - frame name, dimensions
  - fill colors, gradients
  - typography (font, size, weight, line-height)
  - auto-layout gaps / padding
  - border radius, shadows
  - variantes (Default / Hover / Selected)
          │
          ▼
Claude génère / met à jour :
  - src/components/MyComponent/MyComponent.tsx
  - src/components/MyComponent/MyComponent.stories.tsx
          │
          ▼
Storybook reflète immédiatement le changement
```

**Prompt type pour Claude :**
```
Lis le composant "Feature Card" dans mon fichier Figma [URL ou node ID].
Génère le composant React + Tailwind correspondant en utilisant les tokens
de tailwind.config.ts, et crée la story Storybook avec toutes les variantes.
```

---

### Scénario B : Code → Figma (export / annotation)

```
Développeur modifie un composant React
          │
          ▼
Claude (Figma Console MCP) :
  - Met à jour les styles du composant Figma correspondant
  - Ajoute une annotation "Synced from code [date]"
  - Crée un nouveau frame de documentation si nécessaire
```

**Prompt type pour Claude :**
```
Le composant Button vient d'être mis à jour (voir Button.tsx).
Mets à jour le composant "Button/Primary" dans Figma pour refléter
les nouveaux padding et border-radius.
```

---

### Scénario C : Audit de cohérence

```
Claude compare Figma ↔ Code ↔ Storybook
          │
          ├── Lit chaque composant via Figma MCP
          ├── Lit chaque fichier .tsx via filesystem
          └── Génère un rapport de divergences :
              "Button dans Figma : border-radius 8px
               Button dans le code : rounded-full (9999px)
               → Divergence détectée"
```

**Prompt type pour Claude :**
```
Audite la cohérence entre les composants dans mon fichier Figma
et les composants dans src/components/. Liste toutes les divergences
de couleurs, tailles et espacement.
```

---

## Setup des MCPs dans Claude Code

```jsonc
// ~/.claude/settings.json (ou claude_desktop_config.json)
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN"
      }
    },
    "figma-console": {
      "command": "npx",
      "args": ["-y", "figma-console-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN"
      }
    }
  }
}
```

Pour obtenir un token Figma : Settings → Security → Personal access tokens

---

## Convention de nommage Figma ↔ Code

Pour que Claude puisse faire la correspondance automatiquement :

| Figma (frame/component name) | Code (fichier) |
|-----------------------------|----------------|
| `Button/Primary` | `src/components/Button/Button.tsx` |
| `FeatureCard/Default` | `src/components/FeatureCard/FeatureCard.tsx` |
| `GradientText/H1` | `src/components/GradientText/GradientText.tsx` |
| `NavDots` | `src/components/NavDots/NavDots.tsx` |

**Règle :** le nom du composant Figma = le nom du dossier dans `src/components/`.

---

## Prompts prêts à l'emploi

### Créer un composant depuis Figma
```
Utilise le Figma MCP pour lire le composant [nom] dans [URL Figma].
Crée le composant React dans src/components/[Nom]/[Nom].tsx
en utilisant Tailwind avec les tokens de tailwind.config.ts.
Crée aussi la story Storybook avec Default + toutes les variantes.
```

### Mettre à jour Figma depuis le code
```
Utilise le Figma Console MCP pour mettre à jour le composant [nom]
dans Figma en te basant sur src/components/[Nom]/[Nom].tsx.
Conserve la structure des frames, mets à jour les styles visuels.
```

### Audit complet
```
Compare tous les composants dans src/components/ avec leur équivalent
dans le fichier Figma [URL]. Liste les divergences et propose des corrections
dans le code (sans toucher à Figma).
```

---

## Avantages vs Token Studio

| Critère | Token Studio | Claude + Figma MCPs |
|---------|-------------|---------------------|
| Courbe d'apprentissage | Élevée (variables Figma, pipelines) | Nulle — tu parles à Claude |
| Mise à jour | Manuel ou CI/CD complexe | Un prompt suffit |
| Flexibilité | Tokens uniquement | Composants complets, layouts, logique |
| Bidirectionnel | Oui mais fragile | Oui, natif via les 2 MCPs |
| Autonomie du designer | Dépend de la discipline | Claude s'adapte à n'importe quel état du fichier |
