import { Runtime } from '../runtime/runtime'
import { Command } from './command'
import { Options } from './options'
import { Plugin } from './plugin'
import { GluegunFilesystem, GluegunStrings, GluegunPrint, GluegunSystem, GluegunSemver } from '..'

export interface RunContextParameters {
  /* The command arguments as an array. */
  array?: string[]
  /**
   * Any optional parameters. Typically coming from command-line
   * arguments like this: `--force -p tsconfig.json`.
   */
  options?: Options
  /* Just the first argument. */
  first?: string
  /* Just the 2nd argument. */
  second?: string
  /* Just the 3rd argument. */
  third?: string
  /* Everything else after the command as a string. */
  string?: string
  /* The raw command with any named parameters. */
  raw?: any
  argv?: any
}

export interface GluegunRunContext {
  // known properties
  result?: any
  error?: any
  config?: Options
  parameters: RunContextParameters
  plugin?: Plugin
  command?: Command
  pluginName?: string
  commandName?: string
  runtime?: Runtime

  // known extensions
  filesystem?: GluegunFilesystem
  http?: any
  meta?: any
  patching?: any
  print?: GluegunPrint
  prompt?: any
  semver?: GluegunSemver
  strings?: GluegunStrings
  system?: GluegunSystem
  template?: any
  generate?: any

  // our catch-all! since we can add whatever to this object
  [key: string]: any
}

export class RunContext implements GluegunRunContext {
  [key: string]: any

  public result = null
  public error = null
  public config: Options = {}
  public parameters: RunContextParameters = {}
  public plugin = null
  public command = null
  public pluginName = null
  public commandName = null
  public runtime = null
}
