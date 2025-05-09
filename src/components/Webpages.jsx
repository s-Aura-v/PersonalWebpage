import webpageData from '/public/assets/data/webpages.json'
import '../styles/table-data.css'

export function Webpages() {
    return (
        <>
            <h2>Personal Archive</h2>
            <table>
                <thead>
                <tr>
                    <th className="table-header-name">
                        Name
                    </th>
                    <th className="table-header-description">
                        Description
                    </th>
                    <th className="table-header-link">
                        Link
                    </th>
                    <th className="table-header-tags">
                        Tags
                    </th>
                </tr>
                </thead>


                <tbody>
                {webpageData.filter(item => item.name && item.name.trim() !== "")
                    .map((item, index) => (
                        <tr key={index}>
                            <td className="table-name">{item.name}</td>
                            <td className="table-description">{item.description}</td>
                            <td className="table-url">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.url}
                                </a>
                            </td>
                            <td className="table-tags">{item.tags}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}
