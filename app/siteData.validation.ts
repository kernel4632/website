import type { ContactData, FriendData, ProjectData, SiteData } from '~'

type DataRecord = Record<string, unknown>

function assertRecord(value: unknown, path: string): asserts value is DataRecord {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error(`${path} 必须是对象`)
  }
}

function assertString(record: DataRecord, key: string, path: string): string {
  const value = record[key]
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${path}.${key} 必须是非空字符串`)
  }
  return value
}

function parseArray<T>(value: unknown, path: string, parseItem: (item: unknown, path: string) => T): T[] {
  if (!Array.isArray(value)) throw new Error(`${path} 必须是数组`)
  return value.map((item, index) => parseItem(item, `${path}[${index}]`))
}

function parseFriend(value: unknown, path: string): FriendData {
  assertRecord(value, path)
  return {
    name: assertString(value, 'name', path),
    intro: assertString(value, 'intro', path),
    avatar: assertString(value, 'avatar', path),
    link: assertString(value, 'link', path),
  }
}

function parseProject(value: unknown, path: string): ProjectData {
  assertRecord(value, path)
  return {
    name: assertString(value, 'name', path),
    intro: assertString(value, 'intro', path),
    icon: assertString(value, 'icon', path),
    url: assertString(value, 'url', path),
  }
}

function parseContact(value: unknown, path: string): ContactData {
  assertRecord(value, path)
  return {
    type: assertString(value, 'type', path),
    icon: assertString(value, 'icon', path),
    text: assertString(value, 'text', path),
    link: assertString(value, 'link', path),
  }
}

export function parseSiteData(value: unknown): SiteData {
  assertRecord(value, '站点数据')
  return {
    friends: parseArray(value.friends, 'friends', parseFriend),
    projects: parseArray(value.projects, 'projects', parseProject),
    contacts: parseArray(value.contacts, 'contacts', parseContact),
  }
}
