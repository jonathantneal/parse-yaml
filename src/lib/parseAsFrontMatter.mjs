import parseAsYaml from './parseAsYaml';

export default function parseAsFrontMatter (data, ...options) {
	const [, frontmatter, yamlOrJson, body] = frontRegExp.exec(data);

	const attributes = yamlOrJson.charAt(0) === '{'
		? JSON.parse(yamlOrJson)
	: parseAsYaml(yamlOrJson, ...options);

	return { attributes, body, frontmatter };
}

const frontRegExp = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/;
