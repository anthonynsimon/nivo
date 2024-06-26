import { settingsMapper, mapAxis, mapFormat } from '../../../lib/settings'

export default settingsMapper(
    {
        pointLabel: value => {
            if (value === `d => \`\${d.x}: \${d.y}\``) return d => `${d.data.x}: ${d.data.y}`
            return `data.${value}`
        },
        xFormat: mapFormat,
        yFormat: mapFormat,
        axisTop: mapAxis('top'),
        axisRight: mapAxis('right'),
        axisBottom: mapAxis('bottom'),
        axisLeft: mapAxis('left'),
    },
    {
        exclude: ['enable axisTop', 'enable axisRight', 'enable axisBottom', 'enable axisLeft'],
    }
)
