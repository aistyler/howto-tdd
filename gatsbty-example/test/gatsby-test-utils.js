
import { StaticQuery, useStaticQuery } from "gatsby";

export const mockOnceStaticQuery = (data) => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          ...data
        },
      },
    })
  );
}

export const mockStaticQuery = (data) => {
  StaticQuery.mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          ...data
        },
      },
    })
  );
}

export const mockOnceUseStaticQuery = (data) => {
  useStaticQuery.mockImplementationOnce(() =>
    ({
      site: {
        siteMetadata: {
          ...data
        },
      },
    })
  );
}

export const mockUseSiteMetadataStaticQuery = (data) => {
  useStaticQuery.mockImplementation(() =>
    ({
      site: {
        siteMetadata: {
          ...data
        },
      },
    })
  );
}
