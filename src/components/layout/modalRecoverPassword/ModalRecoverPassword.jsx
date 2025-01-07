import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { InputRegister } from "../../pages/register/styles-register";
import { Box, CircularProgress } from "@mui/material";
import { useModalRecoverPassword } from "./use-modal-recover-password";
import AuthFlashMessage from "../authFlashMessage/AuthFlashMessage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalRecoverPassword({ open, handleClose }) {
  const {
    emailRecover,
    setEmailRecover,
    enviarToken,
    messageRecover,
    loadingRecover,
    isSendEmail,
    seconds,
    setMessageRecover,
  } = useModalRecoverPassword();

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={() => {
          handleClose();
          setEmailRecover("");
          setMessageRecover("");
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Recuperar senha
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <Box flexDirection={"column"} display={"flex"} gap={"1rem"}>
            {isSendEmail ? (
              <>
                <Typography gutterBottom>
                  Verifique seu e-mail {emailRecover}!
                </Typography>
                <Typography color="#4B5563" gutterBottom>
                  Enviamos um link para o endereço de e-mail. Por favor, siga as
                  instruções contidas na mensagem para continuar com a
                  recuperação da sua senha. Se você não encontrar o e-mail em
                  sua caixa de entrada, verifique a pasta de spam.
                </Typography>
              </>
            ) : (
              <>
                <Typography color="#4B5563" gutterBottom>
                  Por favor, insira um endereço de e-mail válido associado à
                  conta cuja senha você deseja alterar. Certifique-se de usar o
                  e-mail correto, pois enviaremos um link de recuperação para
                  ele.
                </Typography>

                <InputRegister
                  placeholder="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={emailRecover}
                  onChange={(e) => setEmailRecover(e.target.value)}
                />

                <AuthFlashMessage message={messageRecover} />
              </>
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          {loadingRecover ? (
            <CircularProgress size={18} />
          ) : (
            <>
              {isSendEmail ? (
                <Typography>
                  {`Poderá reinviar o email em ${String(seconds).padStart(
                    2,
                    "0"
                  )} segundos`}
                </Typography>
              ) : (
                <Button autoFocus onClick={enviarToken}>
                  Enviar email
                </Button>
              )}
            </>
          )}
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
