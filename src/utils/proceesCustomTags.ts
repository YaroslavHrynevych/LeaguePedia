export default function transformText(input: string): string {
    const tagMap: Record<string, string> = {
        attention: 'color: var(--color-main-accent);',
        magicDamage: 'color: var(--magic-damage);',
        rarityMythic: 'color: var(--magic-damage);',
        passive: 'color:var(--color-secondary-accent);',
        onhit: 'color: var(---color-main-accent);',
        physicaldamage: 'color: var(--physical-damage);',
        scaleAD: 'color: var(--physical-damage);',
        shield: 'font-weight: bold;',
        keyword: 'color: var(--color-main-accent); font-weight: bold;',
        scalearmor: "color: var(--color-main-accent); font-weight: bold;",
        speed: 'color: white; font-weight: bold;',
        healing: 'color: var(--healing);',
        scalehealth: 'color: var(--healing);',
        scaleHealth: 'color: var(--healing);',
        scalemana: 'color: var(--magic-damage); font-weight: bold;',
        status: "color: var(--color-main-accent); font-weight: bold;",
        stats: '',
        statGood: "color: var(--color-main-accent); font-weight: bold;",
        lifesteal: 'color: var(--color-main-accent); font-weight: bold;',
        truedamage: 'color: white; font-weight: bold;',
        trueDamage: 'color: white; font-weight: bold;',
        keywordMajor: 'color: var(--color-main-accent); font-weight: bold;',
        gold: 'color: var(--color-main-accent);',
        scalelevel: 'color: var(--color-secondary-accent);',
        scaleLevel: 'color: var(--color-secondary-accent);',
        scaleMana: 'color: var(--magic-damage);',
        scaleap: 'color: var(--color-secondary-accent); font-weight: bold;',
        scaleAP: 'color: var(--color-secondary-accent); font-weight: bold;',
        rules: "color: var(--color-main-accent); font-weight: bold;"
    };


    Object.entries(tagMap).forEach(([tag, style]) => {
        let regex = new RegExp(`<${tag}>(.*?)<\/${tag}>`, 'gs');
        while (regex.test(input)) {
            input = input.replace(regex, `<span style="${style}">$1</span>`);
        }
    });

    const tagsToStrip = ['mainText'];
    const stripRegex = new RegExp(`</?(${tagsToStrip.join('|')})>`, 'g');
    input = input.replace(stripRegex, '');

    return input;
}



