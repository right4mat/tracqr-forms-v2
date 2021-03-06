import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'
import { upload } from '../../../../utils/utils'

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(2)
  }
}))

export default function NumberInput(props) {
  const [error, setError] = useState(false)
  const classes = useStyles()
  return (
    <Box className={classes.input}>
      <Button
        disabled={props.disabled}
        className={classes.button}
        aria-label='Logic'
        startIcon={<CloudUploadOutlinedIcon />}
        variant='outlined'
        component='label'
      >
        File
        <input type='file' hidden onChange={ async (e) => props.onChange(await upload(e.target.files[0]))} />
      </Button>
      <TextField
        disabled={!props.file}
        size='small'
        error={error}
        onChange={(e) => {
          props.file.name = e.target.value
          props.onChange(props.file)
        }}
        value={props.file.name}
        placeholder={props.placeholder}
        className={props.className}
        label={props.label}
        variant={props.variant}
        fullWidth
        InputLabelProps={props.InputLabelProps}
      />
    </Box>
  )
}
